import {Fragment, useCallback, useMemo, useState} from 'react';
import clsx from 'clsx';
import MenuFold from '../atoms/MenuFold';
import MenuItem from '../atoms/MenuItem';
import SectionHeader from '../atoms/SectionHeader';
import boxColorClass from '../mappings/box-colors';
import { AsBox } from '../as';
import { WithItemsOfMenu } from '../withs';

const defaultItems = [];

export function Menu({ className, color = 'primary', items = defaultItems, variant = 'contained' }: MenuProps) {
    const {activeGroup: defaultActiveGroup, groups} = useMemo(() => {
        return items.reduce((acc: any, i: any) => {
            if (i.type === 'section') {
                acc.groups.push({...i, items: []})
            } else if (acc.groups.length) {
                acc.groups[acc.groups.length - 1].items.push(i);
            } else {
                acc.groups.push(i);
            }
            if (i.active) acc.activeGroup = acc.groups.length - 1;
            return acc;
        }, {groups: [] as any[], activeGroup: 0});
    }, [items]);
    const [activeGroup, setActiveGroup] = useState<number|undefined>(defaultActiveGroup);
    const handleSectionClick = useCallback((i: number) => (e: any) => {
        e.stopPropagation();
        setActiveGroup((activeGroup === i) ? undefined : i);
    }, [setActiveGroup, activeGroup]);

    return (
        <div className={clsx(boxColorClass('clear'), className)}>
            {groups.map(({ type, items: groupItems = [], ...item }, index) => {
                const active = (activeGroup === index);
                return (
                    <Fragment key={index}>
                        {'section' === type && (
                            <>
                                <SectionHeader active={active} color={color} subtitle={item.description} title={item.label} variant={variant} onClick={handleSectionClick(index) as any} hoverable={!!groupItems.length} />
                                <div className={clsx('overflow-hidden max-h-0 transition transition-all easy-in-out duration-500', active ? 'max-h-96' : 'max-h-0')}>
                                    {groupItems.map(({type: subType, ...subItem}: any, index2) => (
                                        <Fragment key={index2}>
                                            {'menu' === subType && <MenuFold color={color} variant={'light'} {...subItem} />}
                                            {'item' === subType && <MenuItem color={color} variant={'light'} {...subItem} />}
                                        </Fragment>
                                    ))}
                                </div>
                            </>
                        )}
                        {'menu' === type && <MenuFold color={color} variant={'light'} {...item} />}
                        {'item' === type && <MenuItem color={color} variant={'light'} {...item} />}
                    </Fragment>
                )
            })}
        </div>
    );
}

export interface MenuProps extends AsBox, WithItemsOfMenu {}

// noinspection JSUnusedGlobalSymbols
export default Menu;
