import * as queries from '../configs/queries';
import useApi from "./useApi";

export const useMutationApi = (name: string, options: any = {}) => {
    const {gql, useMutation} = useApi();
    return useMutation(queries[name](gql), options);
}

export default useMutationApi