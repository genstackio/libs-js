import useApi from "./useApi";

export const useLazyQueryApi = (name: string, options: any = {}) => {
    const {getQuery, useLazyQuery} = useApi();
    return useLazyQuery(getQuery(name, options), options);
}

export default useLazyQueryApi
