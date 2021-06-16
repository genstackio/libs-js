import {useCallback, useState} from "react";

type mutationInfos = {called: boolean, loading: boolean, data: any, error: any};
type queryInfos = {called: boolean, loading: boolean, data: any, error: any};
type lazyQueryInfos = {called: boolean, loading: boolean, data: any, error: any};

// noinspection JSUnusedLocalSymbols
const gql = x => undefined;

// noinspection JSUnusedLocalSymbols
const createUseQuery = (mocks = []) => (query: any, options: any = {}) => {
    const [infos, setInfos] = useState<queryInfos & {mockCounter: number}>({mockCounter: 0, called: true, loading: true, data: undefined, error: undefined});
    const q = useCallback(() => {
        const currentCounter = infos['mockCounter'];
        let data: any = mocks[currentCounter] || {};
        ('function' === typeof data) && (data = (<Function>data)({query, options}));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data instanceof Error) {
                    setInfos({...infos, mockCounter: (currentCounter + 1) >= mocks.length ? 0 : (currentCounter + 1), called: true, loading: false, data: undefined, error: {graphQLErrors: [data]}});
                    reject(data);
                } else {
                    setInfos({...infos, mockCounter: (currentCounter + 1) >= mocks.length ? 0 : (currentCounter + 1), called: true, loading: false, data, error: undefined});
                    resolve(data);
                }
            }, 1000);
        }).then(x => x);
    }, [setInfos, infos]);
    q();
    return infos;
}

// noinspection JSUnusedLocalSymbols
const createUseMutation = (mocks = []) => (query: any, options: any = {}): [Function, mutationInfos] => {
    const [infos, setInfos] = useState<mutationInfos & {mockCounter: number}>({mockCounter: 0, called: false, loading: false, data: undefined, error: undefined});
    const mutate = useCallback(async (localOptions = {}) => {
        const currentCounter = infos['mockCounter'];
        let data: any = mocks[infos['mockCounter']] || {};
        ('function' === typeof data) && (data = (<Function>data)({query, options: localOptions, globalOptions: options}));
        setInfos({...infos, called: true, loading: true, data: undefined, error: undefined});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data instanceof Error) {
                    setInfos({...infos, mockCounter: (currentCounter + 1) >= mocks.length ? 0 : (currentCounter + 1), called: true, loading: false, data: undefined, error: {graphQLErrors: [data]}});
                    reject(data);
                } else {
                    setInfos({...infos, mockCounter: (currentCounter + 1) >= mocks.length ? 0 : (currentCounter + 1), called: true, loading: false, data, error: undefined});
                    resolve(data);
                }
            }, 1000);
        }).then(x => x);
    }, [setInfos, infos]);
    return [mutate, infos];
}
// noinspection JSUnusedLocalSymbols
const createUseLazyQuery = (mocks = []) => (query: any, options: any = {}): [Function, lazyQueryInfos] => {
    const [infos, setInfos] = useState<lazyQueryInfos & {mockCounter: number}>({mockCounter: 0, called: false, loading: false, data: undefined, error: undefined});
    const lazy = useCallback(async (localOptions = {}) => {
        const currentCounter = infos['mockCounter'];
        let data: any = mocks[infos['mockCounter']] || {};
        ('function' === typeof data) && (data = (<Function>data)({query, options: localOptions, globalOptions: options}));
        setInfos({...infos, called: true, loading: true, data: undefined, error: undefined});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data instanceof Error) {
                    setInfos({...infos, mockCounter: (currentCounter + 1) >= mocks.length ? 0 : (currentCounter + 1), called: true, loading: false, data: undefined, error: {graphQLErrors: [data]}});
                    reject(data);
                } else {
                    setInfos({...infos, mockCounter: (currentCounter + 1) >= mocks.length ? 0 : (currentCounter + 1), called: true, loading: false, data, error: undefined});
                    resolve(data);
                }
            }, 1000);
        }).then(x => x);
    }, [setInfos, infos]);
    return [lazy, infos];
}
export const createDefaultApiContextValue = ({useMutationMocks = [], useQueryMocks = [], useLazyQueryMocks = []} = {}) => ({gql, useQuery: createUseQuery(useQueryMocks), useLazyQuery: createUseLazyQuery(useLazyQueryMocks), useMutation: createUseMutation(useMutationMocks)});

export default createDefaultApiContextValue