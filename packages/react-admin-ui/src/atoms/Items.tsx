import { ComponentType } from 'react';

export function Items({ items = [], component: Component, itemProp = undefined, ...props }: ItemsProps) {
    return (
        <>
            {items.map((item, index) => (
                <Component key={index} {...(itemProp ? { [itemProp]: item } : item)} {...props} />
            ))}
        </>
    );
}

export interface ItemsProps {
    items?: any[];
    itemProp?: string;
    component: ComponentType<any>;
    [key: string]: any;
}

export default Items;
