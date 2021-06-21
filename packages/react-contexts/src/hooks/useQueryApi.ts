import * as queries from '../configs/queries';
import useApi from "./useApi";

export const useQueryApi = (name: string, options: any = {}) => {
    const {gql, useQuery} = useApi();
    return useQuery(queries[name](gql), options);
}

export default useQueryApi