import useApi from './useApi';

const defaultOptions = {};

export const useQueryApi = (name: string, options: any = defaultOptions) => {
    const { getQuery, useQuery } = useApi();
    return useQuery(getQuery(name, options), options);
};

export default useQueryApi;
