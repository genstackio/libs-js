import { WithAny, WithComponent, WithItems } from '../withs';

export function Items({ items = [], component: Component, itemProp = undefined, ...props }: ItemsProps) {
    return (
        <>
            {items.map((item, index) => (
                <Component key={index} {...(itemProp ? { [itemProp]: item } : item)} {...props} />
            ))}
        </>
    );
}

export interface ItemsProps extends WithAny, Required<WithComponent>, WithItems {
    itemProp?: string;
}

export default Items;
