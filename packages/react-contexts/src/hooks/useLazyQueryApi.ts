import useApi from './useApi';

const defaultOptions = {};

export const useLazyQueryApi = (name: string, options: any = defaultOptions) => {
    const { getQuery, useLazyQuery } = useApi();
    return useLazyQuery(getQuery(name, options), options);
};

export default useLazyQueryApi;
