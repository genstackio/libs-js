import useApi from './useApi';

const defaultOptions = {};

export const useQueryApi = (name: string, options: any = defaultOptions) => {
    const { getQuery, useQuery } = useApi();
    try {
        return useQuery(getQuery(name, options), options);
    } catch (e: any) {
        return {called: false, data: undefined, loading: false, error: e};
    }
};

export default useQueryApi;
