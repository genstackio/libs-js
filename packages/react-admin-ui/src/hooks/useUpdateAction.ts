import useQueryApi from '@genstackio/react-contexts/lib/hooks/useQueryApi';
import useAction from './useAction';

export function useUpdateAction({
    id,
    getQueryName,
    updateQueryName,
    onSuccess,
    prepare,
}: {
    id: string;
    getQueryName: string;
    updateQueryName: string;
    onSuccess?: Function;
    prepare?: Function;
}) {
    const { data, loading } = useQueryApi(getQueryName, { variables: { id } });
    const props = useAction(updateQueryName, { onSuccess, prepare });

    return { data, props, loading };
}

export default useUpdateAction;
