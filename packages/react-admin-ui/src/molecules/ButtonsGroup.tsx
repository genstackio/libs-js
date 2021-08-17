import clsx from 'clsx';
import { WithItemsOfAction } from '../withs';
import { AsComponent } from '../as';
import ButtonsGroupItem from './ButtonsGroupItem';
import Items from '../atoms/Items';

export function ButtonsGroup({ className, items = [] }: ButtonsGroupProps) {
    return <Items items={items} component={ButtonsGroupItem} containerClassName={clsx('x-buttons', className)} />;
}

export interface ButtonsGroupProps extends AsComponent, WithItemsOfAction {}

// noinspection JSUnusedGlobalSymbols
export default ButtonsGroup;
