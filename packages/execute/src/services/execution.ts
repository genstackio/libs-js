import {
    context,
    config,
    execution,
    execution_definition,
    execution_definition_step,
    execution_definition_task,
    execution_order,
    execution_order_prepared,
} from '../types';
import OrderError from '../errors/OrderError';
import * as defaultActions from '../actions';
import { v4 as uuidv4 } from 'uuid';
import { parse } from './config';
import YAML from 'yaml';

export async function execute(config: config, context: context) {
    const execution = await initExecution(config, context);
    await preProcessExecution(execution, context);
    await processExecution(execution, context);
    await postProcessExecution(execution, context);

    return execution;
}

// noinspection JSUnusedLocalSymbols
async function initExecution(config: config, context: context): Promise<execution> {
    let definition: execution_definition = await parse(config?.definition, {});
    const params: any = await parse(config?.params, {});

    definition = {
        steps: [],
        tasks: [],
        ...definition,
    };

    if (!definition.steps || !Array.isArray(definition.steps)) definition.steps = [];

    return {
        config,
        definition,
        params,
        ctx: {},
        status: 'initialized',
        result: undefined,
        details: {},
        parallel: false,
        orders: [],
    };
}

// noinspection JSUnusedLocalSymbols
async function buildExecutionOrders(execution: execution, context: context): Promise<[boolean, execution_order[]]> {
    const sequentialItems: (string | execution_definition_step)[] = execution.definition?.steps || [];
    const parallelItems: (string | execution_definition_task)[] = execution.definition?.tasks || [];
    const parallel = !!parallelItems.length;
    const items: (string | execution_definition_step | execution_definition_task)[] = parallel
        ? parallelItems
        : sequentialItems;

    return [
        parallel,
        (
            await Promise.all(
                items.map(async (item: string | execution_definition_step | execution_definition_task) =>
                    buildExecutionOrderFromDefinition(item, execution, context),
                ),
            )
        ).filter((x) => !!x) as execution_order[],
    ];
}

async function parseItemShortForm(type: string): Promise<{ type: string; [key: string]: any }> {
    const match = type.match(/^([^(]+)\(([^)]*)\)$/);
    let parsedVars = {};
    if (!!match && !!match.length) {
        type = match[1];
        parsedVars = !!match[1]
            ? match[2].split(/\s*,\s*/g).reduce((acc, t) => {
                  const [k, v = undefined] = t.split(/\s*=\s*/);
                  if (undefined === v) {
                      acc['default'] = replaceVarValueIfNeeded(k);
                  } else {
                      acc[k] = replaceVarValueIfNeeded(YAML.parse(v || ''));
                  }
                  return acc;
              }, {})
            : {};
    }
    return { type, params: parsedVars };
}

function replaceVarValueIfNeeded(value: any) {
    if ('string' !== typeof value) return value;
    switch (value) {
        case '$now.time':
            return 'new Date().getTime()';
        case '$now':
            return 'new Date()';
        case '$now.iso':
            return 'new Date().toISOString()';
        default:
            return value;
    }
}

// noinspection JSUnusedLocalSymbols
async function buildExecutionOrderFromDefinition(
    item: string | execution_definition_step | execution_definition_task,
    execution: execution,
    context: context,
): Promise<execution_order | undefined> {
    item = ('string' === typeof item ? await parseItemShortForm(item) : item) as
        | execution_definition_step
        | execution_definition_task;
    if (!item || !item.type) return undefined;

    return {
        id: item.id || uuidv4(),
        type: item.type,
        name: item.name,
        required: false !== item.required,
        params: item.params || {},
    };
}
// noinspection JSUnusedLocalSymbols
async function preProcessExecution(execution: execution, context: context): Promise<void> {
    execution.status = 'preprocessed';
    [execution.parallel, execution.orders] = await buildExecutionOrders(execution, context);
}

// noinspection JSUnusedLocalSymbols
async function processExecution(execution: execution, context: context): Promise<void> {
    if (execution.parallel) return processParallelExecution(execution, context);
    return processSequentialExecution(execution, context);
}

async function processExecutionOrder(order: execution_order, execution: execution, context: context) {
    let preparedOrder: execution_order_prepared | undefined;
    try {
        preparedOrder = await prepareExecutionOrder(order, execution, context);
    } catch (e: any) {
        throw new OrderError(order, undefined, e);
    }
    try {
        return [await processExecutionPreparedOrder(preparedOrder, execution.ctx, execution, context), preparedOrder];
    } catch (e: any) {
        throw new OrderError(order, preparedOrder, e);
    }
}

async function processParallelExecution(execution: execution, context: context): Promise<void> {
    // @ts-ignore
    return populateExecutionFromReports(
        await Promise.allSettled(
            execution.orders.map(async (order: execution_order) => {
                return processExecutionOrder(order, execution, context);
            }),
        ),
        execution,
        context,
    );
}

// noinspection JSUnusedLocalSymbols
async function populateExecutionFromReports(reports: any[], execution: execution, context: context): Promise<void> {
    const { successes, errors } = reports.reduce(
        (acc, r) => {
            if (r.status === 'fulfilled') acc.successes.push(r.value as [any, execution_order_prepared]);
            else acc.errors.push(r.reason);
            return acc;
        },
        { successes: [] as [any, execution_order_prepared][], errors: [] as OrderError[] },
    );

    execution.status = 'processed';
    execution.successes = successes;
    execution.errors = errors;
}

async function processSequentialExecution(execution: execution, context: context): Promise<void> {
    return populateExecutionFromReports(
        (
            await execution.orders.reduce(
                async (acc: Promise<{ stopped: boolean; results: any[] }>, order: execution_order) => {
                    const rr = await acc;
                    const { stopped, results: local } = rr;
                    if (stopped) return rr;
                    try {
                        local.push({
                            status: 'fulfilled',
                            value: await processExecutionOrder(order, execution, context),
                        });
                    } catch (e: any) {
                        local.push({ status: 'error', reason: e });
                        if (order.required) return { stopped: true, results: local };
                    }
                    return { stopped: false, results: local };
                },
                Promise.resolve({ stopped: false, results: [] as any[] }),
            )
        ).results,
        execution,
        context,
    );
}

// noinspection JSUnusedLocalSymbols
async function prepareExecutionOrder(
    order: execution_order,
    execution: execution,
    context: context,
): Promise<execution_order_prepared> {
    return {
        id: order.id,
        type: order.type,
        params: order.params || {},
        required: order.required,
    };
}

// noinspection JSUnusedLocalSymbols
async function processExecutionPreparedOrder(
    preparedOrder: execution_order_prepared,
    ctx: any,
    execution: execution,
    context: context,
): Promise<any> {
    const actions = { ...defaultActions, ...(context?.actions || {}) };
    if (!actions[preparedOrder?.type]) throw new Error(`Unknown order action type '${preparedOrder?.type}'`);
    const action = actions[preparedOrder!.type];
    if ('function' !== typeof action) throw new Error(`Order action type '${preparedOrder?.type}' is not a function`);

    return action(preparedOrder.params, ctx, { ...context, execution });
}

// noinspection JSUnusedLocalSymbols
async function postProcessExecution(execution: execution, context: context): Promise<void> {
    const [status, result, details] = await reduceExecution(execution, context);
    execution.status = status;
    execution.result = result;
    execution.details = details;
}

async function reduceExecution(execution: execution, context: context) {
    const result = await reduceExecutionResult(execution.successes || [], execution, context);
    const details = await reduceExecutionDetails(execution.errors || [], execution, context);

    return [execution.errors?.length ? 'failure' : 'success', result, details];
}

// noinspection JSUnusedLocalSymbols
async function reduceExecutionResult(
    successes: [any, execution_order_prepared][],
    execution: execution,
    context: context,
): Promise<any> {
    return successes.reduce((acc, s) => {
        Object.assign(acc, s[0] || {});
        return acc;
    }, {} as any);
}

// noinspection JSUnusedLocalSymbols
async function reduceExecutionDetails(errors: Error[], execution: execution, context: context): Promise<any> {
    if (!errors || !errors.length) return { status: 'success' };
    if (1 === errors.length)
        return { status: 'error', name: errors[0].name, stack: errors[0].stack, message: errors[0].message };
    return {
        status: 'error',
        name: 'Error',
        message: 'multiple errors',
        errors: errors.map((e) => ({
            status: 'error',
            name: e.name,
            stack: e.stack,
            message: e.message,
            ...(e['getOrder'] ? { order: e['getOrder']() } : {}),
            ...(e['getPreparedOrder'] ? { preparedOrder: e['getPreparedOrder']() } : {}),
        })),
    };
}
