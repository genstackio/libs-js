import clsx from 'clsx';
import Items from '../atoms/Items';
import ButtonsGroupItem from './ButtonsGroupItem';
import { AsComponent } from '../as';
import { WithItemsOfAction } from '../withs';

export function ButtonsGroup({ className, items = [] }: ButtonsGroupProps) {
    return (
        <Items
            component={ButtonsGroupItem}
            containerClassName={clsx('flex items-center flex-wrap space-x-0 sm:space-x-2 md:space-x-4', className)}
            items={items}
        />
    );
}

export interface ButtonsGroupProps extends AsComponent, WithItemsOfAction {}

// noinspection JSUnusedGlobalSymbols
export default ButtonsGroup;
