import Items from './Items';
import Button from './Button';
import { AsComponent } from '../as';
import { WithItemsOfButtonItems } from '../withs';

const defaultItems = [];

export function ButtonItems({ className, items = defaultItems }: ButtonItemsProps) {
    return <Items component={Button} container containerClassName={className} items={items} className={'mr-2'} />;
}

export interface ButtonItemsProps extends AsComponent, WithItemsOfButtonItems {}

// noinspection JSUnusedGlobalSymbols
export default ButtonItems;
