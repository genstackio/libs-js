import { WithItemsOfButtonItems } from '../withs';
import Items from './Items';
import Button from './Button';
import { AsComponent } from '../as';

export function ButtonItems({ className, items = [] }: ButtonItemsProps) {
    return <Items items={items} component={Button} className={'mr-2'} container containerClassName={className} />;
}

export interface ButtonItemsProps extends AsComponent, WithItemsOfButtonItems {}

// noinspection JSUnusedGlobalSymbols
export default ButtonItems;
