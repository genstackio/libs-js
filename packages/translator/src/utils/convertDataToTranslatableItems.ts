import {translatable_item} from "../types";

export function convertDataToTranslatableItems(data: Record<string, any>) {
    return Object.entries(data).reduce((acc, [k, v]: [string, any]) => {
        return Object.entries(v as Record<string, any>).reduce((acc2, [kk, vv]: [string, string]) => {
            acc2.push({text: vv, path: `${k}|||${kk}`});
            return acc2;
        }, acc) as any;
    }, [] as translatable_item[]);
}

export default convertDataToTranslatableItems;
