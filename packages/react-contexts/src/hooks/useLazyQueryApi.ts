import * as queries from '../configs/queries';
import useApi from "./useApi";

export const useLazyQueryApi = (name: string, options: any = {}) => {
    const {gql, useLazyQuery} = useApi();
    return useLazyQuery(queries[name](gql), options);
}

export default useLazyQueryApi