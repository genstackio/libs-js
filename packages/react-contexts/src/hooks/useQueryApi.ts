import useApi from "./useApi";

export const useQueryApi = (name: string, options: any = {}) => {
    const {getQuery, useQuery} = useApi();
    return useQuery(getQuery(name, options), options);
}

export default useQueryApi
