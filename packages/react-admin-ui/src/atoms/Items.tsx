import { ComponentType, useCallback } from 'react';
import clsx from 'clsx';
import Div from './Div';
import { class_name, flag } from '../types';
import applyMap from '../utils/applyMap';
import { WithAny, WithComponent, WithItems } from '../withs';

const defaultItems = [];
const defaultMap = {};

export function Items({
    className,
    component: Component,
    container = false,
    containerClassName,
    containerProps,
    current,
    itemProp = undefined,
    items = defaultItems,
    map = defaultMap,
    onChangeFactory,
    propsFactory,
    ...props
}: ItemsProps) {
    const Container =
        false === container ? (containerClassName ? Div : undefined) : true === container ? Div : container;
    const computedPropsFactory = useCallback(
        (item: any, index: number) => ({
            active: current === index,
            ...(itemProp ? { [itemProp]: applyMap(item, map) } : applyMap(item, map)),
            ...props,
            index,
            even: 0 === index % 2,
            first: index === 0,
            last: index === items.length - 1,
            odd: 1 === index % 2,
            ...(onChangeFactory ? { onChange: onChangeFactory(index) } : {}),
            className: clsx(className, item.itemClassName),
        }),
        [className, current, items, itemProp, props],
    );
    const content = (
        <>
            {items.map(({ className: itemClassName, ...item }, index) => {
                const computedProps = computedPropsFactory(item, index);
                return (
                    <Component key={index} {...computedProps} {...(propsFactory ? propsFactory(computedProps) : {})} />
                );
            })}
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
    current?: any;
    propsFactory?: (props: any) => any;
    onChangeFactory?: (index: number) => Function;
    map?: { [key: string]: string | string[] };
}

// noinspection JSUnusedGlobalSymbols
export default Items;
