import useQueryApi from '@genstackio/react-context-api/lib/hooks/useQueryApi';

export function useListDocPage({
    queryName,
    cursor,
    page,
    fetchSortVariables,
}: {
    queryName: string;
    cursor?: string;
    page: any;
    fetchSortVariables: any;
}) {
    return useQueryApi(queryName, {
        fetchPolicy: 'cache-and-network',
        variables: {
            ...(cursor ? { offset: cursor } : {}),
            limit: page.size,
            ...fetchSortVariables,
        },
    }) as any;
}

export default useListDocPage;
