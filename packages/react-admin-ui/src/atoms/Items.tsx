import { WithAny, WithComponent, WithItems } from '../withs';
import clsx from 'clsx';
import { class_name, flag } from '../types';
import applyMap from '../utils/applyMap';
import { ComponentType } from 'react';
import Div from './Div';

export function Items({
    items = [],
    container = false,
    containerClassName,
    containerProps,
    component: Component,
    itemProp = undefined,
    map = {},
    className,
    ...props
}: ItemsProps) {
    const Container =
        false === container ? (containerClassName ? Div : undefined) : true === container ? Div : container;
    const content = (
        <>
            {items.map(({ className: itemClassName, ...item }, index) => (
                <Component
                    key={index}
                    {...(itemProp ? { [itemProp]: applyMap(item, map) } : applyMap(item, map))}
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
    return Container ? (
        <Container className={containerClassName} {...containerProps}>
            {content}
        </Container>
    ) : (
        content
    );
}

export interface ItemsProps extends WithAny, Required<WithComponent>, WithItems {
    itemProp?: string;
    container?: flag | ComponentType<any>;
    containerProps?: any;
    containerClassName?: class_name;
    map?: { [key: string]: string | string[] };
}

// noinspection JSUnusedGlobalSymbols
export default Items;
