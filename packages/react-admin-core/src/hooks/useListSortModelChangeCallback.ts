import { useCallback } from 'react';

export function useListSortModelChangeCallback({ setSortModel }: { setSortModel: Function }) {
    return useCallback(
        (model) => {
            setSortModel([...model.sortModel]);
        },
        [setSortModel],
    );
}

export default useListSortModelChangeCallback;
