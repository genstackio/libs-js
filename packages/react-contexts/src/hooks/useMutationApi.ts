import useApi from './useApi';

export const useMutationApi = (name: string, options: any = {}) => {
    const { useMutation, getQuery, getCallbacks } = useApi();
    return [...(useMutation(getQuery(name, options), options) as [Function, any]), getCallbacks(name)];
};

export default useMutationApi;
