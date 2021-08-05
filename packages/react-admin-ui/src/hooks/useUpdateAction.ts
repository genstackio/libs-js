import useQueryApi from '@genstackio/react-contexts/lib/hooks/useQueryApi';
import useAction from './useAction';

export function useUpdateAction({
    id,
    queryName,
    mutationName,
    onSuccess,
    prepare,
}: {
    id: string;
    queryName: string;
    mutationName: string;
    onSuccess?: Function;
    prepare?: Function;
}) {
    const { data, loading } = useQueryApi(queryName, { variables: { id } });
    const props = useAction(mutationName, { onSuccess, prepare });

    return { data, props, loading };
}

export default useUpdateAction;
