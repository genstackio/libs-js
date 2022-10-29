import {useCallback} from "react";
import useCleanData from "@genstackio/react-contexts/lib/hooks/useCleanData";

export function useEditActionPrepare(id: string, forcedPrepare: Function|undefined, keptKeys: string[]) {
    const cleanData = useCleanData();
    return useCallback(
        (data: any) => forcedPrepare
                ? forcedPrepare(data)
                : ((data: any) => ({id, data: cleanData(data, keptKeys, false)}))(data)
        ,
        [forcedPrepare, keptKeys, id],
    );
}
