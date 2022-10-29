import {useCallback} from "react";
import useCleanData from "@genstackio/react-contexts/lib/hooks/useCleanData";

export function useCreateActionPrepare(forcedPrepare: Function|undefined, keptKeys: string[]) {
    const cleanData = useCleanData();
    return useCallback(
        (data: any) => forcedPrepare
                ? forcedPrepare(data)
                : ((data: any) => ({data: cleanData(data, keptKeys, true)}))(data)
        ,
        [forcedPrepare, keptKeys],
    );
}

export default useCreateActionPrepare;
