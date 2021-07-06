import { useCallback, useMemo } from 'react';
import useMutationApi from '@genstackio/react-contexts/lib/hooks/useMutationApi';
import computeActionErrorMessage from '../utils/computeActionErrorMessage';
import { useTranslation } from 'react-i18next';
import {
    action_convert_callback,
    action_converterror_callback,
    action_formaterror_callback,
    action_notify_callback,
    action_onsuccess_callback,
    action_postexecute_callback,
    action_preexecute_callback,
    action_prepare_callback,
    action_processerror_callback,
} from '../types';

const preExecute: action_preexecute_callback = async (order) => order;
const postExecute: action_postexecute_callback = async (result) => result;
const prepare: action_prepare_callback = async (data) => ({ data });
// noinspection JSUnusedLocalSymbols
const notify: action_notify_callback = async (result) => undefined;
const convert: action_convert_callback = async (result) => result;
// noinspection JSUnusedLocalSymbols
const onSuccess: action_onsuccess_callback = async (result) => undefined;
// noinspection JSUnusedLocalSymbols
const processError: action_processerror_callback = async (error, { name, values, options }) => undefined;
const convertError: action_converterror_callback = (error, ctx) => {
    if (!error) return error;
    if (error?.graphQLErrors && error.graphQLErrors.length) {
        return Object.entries(
            error.graphQLErrors.reduce((acc, e) => {
                const message = computeActionErrorMessage(e, ctx);
                acc[''] = acc[''] || [];
                acc[''].push({
                    ...e,
                    ...(message ? { message } : {}),
                });
                return acc;
            }, {}),
        ).reduce((acc, [k, v]) => {
            acc[k] = Array.isArray(v) && v.length === 1 ? v[0] : v;
            return acc;
        }, {});
    }
    return error;
};
const formatError: action_formaterror_callback = (error) => error;

export function useAction(name: string, options: any = {}) {
    const { t } = useTranslation();
    const [execute, { loading, error, ...infos }, callbacks = {}] = useMutationApi(name, options);
    const {
        preExecuteCb,
        postExecuteCb,
        prepareCb,
        convertCb,
        notifyCb,
        processErrorCb,
        onSuccessCb,
        convertErrorCb,
        formatErrorCb,
    } = useMemo(
        () => ({
            preExecuteCb: options.preExecute || callbacks['preExecute'] || preExecute,
            postExecuteCb: options.postExecute || callbacks['postExecute'] || postExecute,
            prepareCb: options.prepare || callbacks['prepare'] || prepare,
            convertCb: options.convert || callbacks['convert'] || convert,
            processErrorCb: options.processError || callbacks['processError'] || processError,
            notifyCb: options.notify || callbacks['notify'] || notify,
            onSuccessCb: options.onSuccess || callbacks['onSuccess'] || onSuccess,
            convertErrorCb: options.convertError || callbacks['convertError'] || convertError,
            formatErrorCb: options.formatError || callbacks['formatError'] || formatError,
        }),
        [],
    );
    const ctx = useMemo(() => ({ name, options, t }), [name, options, t]);
    const onSubmit = useCallback(
        async (values) => {
            const submitCtx = { ...ctx, values };
            try {
                let order = {
                    variables: await prepareCb(values, submitCtx),
                };
                order = (await preExecuteCb(order, submitCtx)) || order;
                let result = await execute(order, submitCtx);
                result = (await postExecuteCb(result, submitCtx)) || result;
                result = (await convertCb(result, submitCtx)) || result;
                await notifyCb(result, submitCtx);
                await onSuccessCb(result, submitCtx);
            } catch (e) {
                processErrorCb(formatErrorCb(convertErrorCb(e, submitCtx), submitCtx), submitCtx);
            }
        },
        [execute, prepareCb, preExecuteCb, postExecuteCb, convertCb, notifyCb, processErrorCb, convertErrorCb, ctx],
    );

    return {
        onSubmit,
        errors: error ? formatErrorCb(convertErrorCb(error, ctx), ctx) : undefined,
        submitting: Boolean(loading),
        ...infos,
    };
}

export default useAction;
