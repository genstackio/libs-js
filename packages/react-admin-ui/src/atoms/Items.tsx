import { WithAny, WithComponent, WithItems } from '../withs';
import clsx from 'clsx';
import { class_name, flag } from '../types';

export function Items({
    items = [],
    container = false,
    containerClassName,
    component: Component,
    itemProp = undefined,
    className,
    ...props
}: ItemsProps) {
    const content = (
        <>
            {items.map(({ className: itemClassName, ...item }, index) => (
                <Component
                    key={index}
                    {...(itemProp ? { [itemProp]: item } : item)}
                    {...props}
                    className={clsx(className, itemClassName)}
                    last={index === items.length - 1}
                    first={index === 0}
                    odd={1 === index % 2}
                    even={0 === index % 2}
                />
            ))}
        </>
    );
    return container || containerClassName ? <div className={containerClassName}>{content}</div> : content;
}

export interface ItemsProps extends WithAny, Required<WithComponent>, WithItems {
    itemProp?: string;
    container?: flag;
    containerClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default Items;
