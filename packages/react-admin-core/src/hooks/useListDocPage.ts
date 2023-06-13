import useQueryApi from '@genstackio/react-context-api/lib/hooks/useQueryApi';

export function useListDocPage({
    queryName,
    cursor,
    pageSize,
    fetchSortVariables,
}: {
    queryName: string;
    cursor?: string;
    pageSize: any;
    fetchSortVariables: any;
}) {
    return useQueryApi(queryName, {
        fetchPolicy: 'cache-and-network',
        variables: {
            ...(cursor ? { offset: cursor } : {}),
            limit: pageSize,
            ...fetchSortVariables,
        },
    }) as any;
}

export default useListDocPage;
