import { translatable_item } from '../types';
import convertValueToTranslatableItems from './convertValueToTranslatableItems';

export function convertDataToTranslatableItems(data: Record<string, any>) {
    return Object.entries(data).reduce(
        (acc, [k, v]: [string, any]) => convertValueToTranslatableItems(v, k, acc),
        [] as translatable_item[],
    );
}

export default convertDataToTranslatableItems;
