import useApi from './useApi';

const defaultOptions = {};

export const useMutationApi = (name: string, options: any = defaultOptions) => {
    const { useMutation, getQuery, getCallbacks } = useApi();
    return [...(useMutation(getQuery(name, options), options) as [Function, any]), getCallbacks(name)];
};

export default useMutationApi;
