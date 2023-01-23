import useApi from './useApi';

const defaultOptions = {};

export const useLazyQueryApi = (name: string, options: any = defaultOptions) => {
    const { getQuery, useLazyQuery } = useApi();
    return useLazyQuery(
        getQuery(name, options),
        options
            ? { ...(options || {}), ...(options!.query ? { query: getQuery(options!.query!, options) } : {}) }
            : undefined,
    );
};

export default useLazyQueryApi;
