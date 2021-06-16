import {cart_item} from "../types";

export function mergeCartItems(newItems?: cart_item[], oldItems?: cart_item[]) {
    if (newItems && !newItems.length) return [];
    return newItems && newItems.map(newItem => {
        const oldItem = oldItems && oldItems.find(item => newItem.id === item.id)
        return {
            ...oldItem,
            ...newItem
        }
    });
}

export default mergeCartItems