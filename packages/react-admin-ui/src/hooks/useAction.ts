import {useCallback, useMemo} from "react";
import {useMutationApi} from "@genstackio/react-contexts";

export type action_preexecute_callback = (order: any) => Promise<any>;
export type action_postexecute_callback = (result: any) => Promise<any>;
export type action_prepare_callback = (data: any) => Promise<any>;
export type action_notify_callback = (result: any) => Promise<void>;
export type action_convert_callback = (result: any) => Promise<any>;
export type action_processerror_callback = (error: any, context: {name: string, values: any, options: any}) => Promise<void>;

const preExecute: action_preexecute_callback = async order => order;
const postExecute: action_postexecute_callback = async result => result;
const prepare: action_prepare_callback = async data => ({data});
// noinspection JSUnusedLocalSymbols
const notify: action_notify_callback = async result => undefined;
const convert: action_convert_callback = async result => result;
// noinspection JSUnusedLocalSymbols
const processError: action_processerror_callback = async (error, {name, values, options}) => undefined;


export function useAction(name: string, options: any = {}) {
    const [execute, {loading, error, ...infos}, callbacks = {}] = useMutationApi(name, options);
    const {preExecuteCb, postExecuteCb, prepareCb, convertCb, notifyCb, processErrorCb} = useMemo(() => ({
        preExecuteCb: options.preExecute || callbacks['preExecute'] || preExecute,
        postExecuteCb: options.postExecute || callbacks['postExecute'] || postExecute,
        prepareCb: options.prepare || callbacks['prepare'] || prepare,
        convertCb: options.convert || callbacks['convert'] || convert,
        processErrorCb: options.processError || callbacks['processError'] || processError,
        notifyCb: options.notify || callbacks['notify'] || notify,
    }), []);
    const onSubmit = useCallback(async values => {
        const ctx = {name, values, options};
        try {
            let order = {
                variables: await prepareCb(values, ctx),
            };
            order = await preExecuteCb(order, ctx) || order;
            let result = await execute(order, ctx);
            result = await postExecuteCb(result, ctx) || result;
            result = await convertCb(result, ctx) || result;
            await notifyCb(result, ctx)
        } catch (e) {
            processErrorCb(e, ctx);
        }
    }, [execute, prepareCb, preExecuteCb, postExecuteCb, convertCb, notifyCb, processError]);

    return {onSubmit, errors: error, submitting: Boolean(loading), ...infos};
}

export default useAction
