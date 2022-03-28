import useApi from './useApi';

const defaultOptions = {};

export const useMutationApi = (name: string, options: any = defaultOptions) => {
    const { useMutation, getQuery, getCallbacks } = useApi();
    try {
        return [...(useMutation(getQuery(name, options), options) as [Function, any]), getCallbacks(name)];
    } catch (e: any) {
        return [() => {}, {called: false, data: undefined, loading: false, error: e}];
    }
};

export default useMutationApi;
