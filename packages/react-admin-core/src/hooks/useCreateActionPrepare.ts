import {useCallback} from "react";
import cleanData from "../utils/cleanData";

export function useCreateActionPrepare(forcedPrepare: Function|undefined, keptKeys: string[]) {
    return useCallback(
        (data: any) => forcedPrepare
                ? forcedPrepare(data)
                : ((data: any) => ({data: cleanData(data, keptKeys, true)}))(data)
        ,
        [forcedPrepare, keptKeys],
    );
}

export default useCreateActionPrepare;
