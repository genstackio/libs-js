import { Fragment } from 'react';
import clsx from 'clsx';
import MenuFold from '../atoms/MenuFold';
import MenuItem from '../atoms/MenuItem';
import SectionHeader from '../atoms/SectionHeader';
import boxColorClass from '../mappings/box-colors';
import { AsBox } from '../as';
import { WithItemsOfMenu } from '../withs';

export function Menu({ className, color = 'primary', items = [], variant = 'contained' }: MenuProps) {
    return (
        <div className={clsx(boxColorClass('clear'), className)}>
            {items.map(({ type, ...item }, index) => (
                <Fragment key={index}>
                    {'section' === type && (
                        <SectionHeader color={color} subtitle={item.description} title={item.label} variant={variant} />
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
