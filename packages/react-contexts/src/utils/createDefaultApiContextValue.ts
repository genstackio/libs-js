import { useCallback, useState } from 'react';

type mutationInfos = { called: boolean; loading: boolean; data: any; error: any };
type queryInfos = { called: boolean; loading: boolean; data: any; error: any };
type lazyQueryInfos = { called: boolean; loading: boolean; data: any; error: any };

// noinspection JSUnusedLocalSymbols
const gql = (x) => undefined;

// noinspection JSUnusedLocalSymbols
const createUseQuery =
    (mocks = []) =>
    (query: any, options: any = {}) => {
        const [infos, setInfos] = useState<queryInfos & { mockCounter: number }>({
            mockCounter: 0,
            called: true,
            loading: true,
            data: undefined,
            error: undefined,
        });
        const q = useCallback(() => {
            const currentCounter = infos['mockCounter'];
            let data: any = mocks[currentCounter] || {};
            'function' === typeof data && (data = (<Function>data)({ query, options }));
            if (data instanceof Promise) {
                return data
                    .then((result) => {
                        setInfos({
                            ...infos,
                            mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                            called: true,
                            loading: false,
                            error: undefined,
                            ...result,
                        });
                        return result;
                    })
                    .catch((result) => {
                        setInfos({
                            ...infos,
                            mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                            called: true,
                            loading: false,
                            data: undefined,
                            error: { graphQLErrors: [result] },
                        });
                        return result;
                    });
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (data instanceof Error) {
                        setInfos({
                            ...infos,
                            mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                            called: true,
                            loading: false,
                            data: undefined,
                            error: { graphQLErrors: [data] },
                        });
                        reject(data);
                    } else {
                        setInfos({
                            ...infos,
                            mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                            called: true,
                            loading: false,
                            data,
                            error: undefined,
                        });
                        resolve(data);
                    }
                }, 1000);
            }).then((x) => x);
        }, [setInfos, infos]);
        q();
        return infos;
    };

// noinspection JSUnusedLocalSymbols
const createUseMutation =
    (mocks = []) =>
    (query: any, options: any = {}): [Function, mutationInfos] => {
        const [infos, setInfos] = useState<mutationInfos & { mockCounter: number }>({
            mockCounter: 0,
            called: false,
            loading: false,
            data: undefined,
            error: undefined,
        });
        const mutate = useCallback(
            async (localOptions = {}) => {
                const currentCounter = infos['mockCounter'];
                let data: any = mocks[infos['mockCounter']] || {};
                'function' === typeof data &&
                    (data = (<Function>data)({ query, options: localOptions, globalOptions: options }));
                setInfos({ ...infos, called: true, loading: true, data: undefined, error: undefined });
                if (data instanceof Promise) {
                    return data
                        .then((result) => {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                error: undefined,
                                ...result,
                            });
                            return result;
                        })
                        .catch((result) => {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                data: undefined,
                                error: { graphQLErrors: [result] },
                            });
                            return result;
                        });
                }
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (data instanceof Error) {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                data: undefined,
                                error: { graphQLErrors: [data] },
                            });
                            reject(data);
                        } else {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                data,
                                error: undefined,
                            });
                            resolve(data);
                        }
                    }, 1000);
                }).then((x) => x);
            },
            [setInfos, infos],
        );
        return [mutate, infos];
    };
// noinspection JSUnusedLocalSymbols
const createUseLazyQuery =
    (mocks = []) =>
    (query: any, options: any = {}): [Function, lazyQueryInfos] => {
        const [infos, setInfos] = useState<lazyQueryInfos & { mockCounter: number }>({
            mockCounter: 0,
            called: false,
            loading: false,
            data: undefined,
            error: undefined,
        });
        const lazy = useCallback(
            async (localOptions = {}) => {
                const currentCounter = infos['mockCounter'];
                let data: any = mocks[infos['mockCounter']] || {};
                'function' === typeof data &&
                    (data = (<Function>data)({ query, options: localOptions, globalOptions: options }));
                setInfos({ ...infos, called: true, loading: true, data: undefined, error: undefined });
                if (data instanceof Promise) {
                    return data
                        .then((result) => {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                error: undefined,
                                ...result,
                            });
                            return result;
                        })
                        .catch((result) => {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                data: undefined,
                                error: { graphQLErrors: [result] },
                            });
                            return result;
                        });
                }
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (data instanceof Error) {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                data: undefined,
                                error: { graphQLErrors: [data] },
                            });
                            reject(data);
                        } else {
                            setInfos({
                                ...infos,
                                mockCounter: currentCounter + 1 >= mocks.length ? 0 : currentCounter + 1,
                                called: true,
                                loading: false,
                                data,
                                error: undefined,
                            });
                            resolve(data);
                        }
                    }, 1000);
                }).then((x) => x);
            },
            [setInfos, infos],
        );
        return [lazy, infos];
    };
// noinspection JSUnusedLocalSymbols
const createGetQuery =
    (config) =>
    (name: string, options: any = {}) => {
        if (!config || !config.queries || !(config.queries[name] || config.queries['*']))
            throw new Error(`No query available for '${name}'`);
        if ('function' !== typeof (config.queries[name] || config.queries['*']))
            throw new Error(`Query must be a function for '${name}'`);
        return (config.queries[name] || config.queries['*'])(gql);
    };
// noinspection JSUnusedLocalSymbols
const createGetCallbacks = (config) => {
    const cbs = config && config.callbacks ? config.callbacks : {};
    return (name: string, options: any = {}) => {
        return {
            ...(cbs['*'] || {}),
            ...(cbs[name] || {}),
        };
    };
};

export const createDefaultApiContextValue = ({
    useMutationMocks = [],
    useQueryMocks = [],
    useLazyQueryMocks = [],
    config = {},
}: any = {}) => ({
    getQuery: createGetQuery(config),
    getCallbacks: createGetCallbacks(config),
    useQuery: createUseQuery(useQueryMocks),
    useLazyQuery: createUseLazyQuery(useLazyQueryMocks),
    useMutation: createUseMutation(useMutationMocks),
});

export default createDefaultApiContextValue;
