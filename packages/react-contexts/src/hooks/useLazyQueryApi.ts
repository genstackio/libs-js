import useApi from './useApi';

const defaultOptions = {};

export const useLazyQueryApi = (name: string, options: any = defaultOptions) => {
    const { getQuery, useLazyQuery } = useApi();
    try {
        return useLazyQuery(getQuery(name, options), options);
    } catch (e: any) {
        return [() => {}, {called: false, data: undefined, loading: false, error: e}];
    }
};

export default useLazyQueryApi;
