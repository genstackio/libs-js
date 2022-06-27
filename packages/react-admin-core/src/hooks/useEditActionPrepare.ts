import {useCallback} from "react";
import cleanData from "../utils/cleanData";

export function useEditActionPrepare(id: string, forcedPrepare: Function|undefined, keptKeys: string[]) {
    return useCallback(
        (data: any) => forcedPrepare
                ? forcedPrepare(data)
                : ((data: any) => ({id, data: cleanData(data, keptKeys)}))(data)
        ,
        [forcedPrepare, keptKeys, id],
    );
}
