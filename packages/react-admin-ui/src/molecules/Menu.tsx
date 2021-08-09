import { Fragment } from 'react';
import MenuFold from '../atoms/MenuFold';
import MenuItem from '../atoms/MenuItem';
import SectionHeader from '../atoms/SectionHeader';
import clsx from 'clsx';
import boxColorClass from '../mappings/box-colors';
import { WithItemsOfMenu } from '../withs';
import { AsBox } from '../as';

export function Menu({ className, items = [], color = 'primary', variant = 'contained' }: MenuProps) {
    return (
        <div className={clsx(boxColorClass('clear'), className)}>
            {items.map(({ type, ...item }, index) => (
                <Fragment key={index}>
                    {'section' === type && (
                        <SectionHeader title={item.label} subtitle={item.description} color={color} variant={variant} />
                    )}
                    {'menu' === type && <MenuFold color={color} variant={'light'} {...item} />}
                    {'item' === type && <MenuItem color={color} variant={'light'} {...item} />}
                </Fragment>
            ))}
        </div>
    );
}

export interface MenuProps extends AsBox, WithItemsOfMenu {}

// noinspection JSUnusedGlobalSymbols
export default Menu;
