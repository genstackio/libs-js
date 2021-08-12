import { icon_variant } from '../types';
import { WithItemsOfCorner, WithText } from '../withs';
import { AsBox } from '../as';
import CornerItem from './CornerItem';
import Items from '../atoms/Items';

export function Corner({ items = [], color, variant, className }: CornerProps) {
    return <Items items={items} component={CornerItem} color={color} variant={variant} className={className} />;
}

export interface CornerProps extends AsBox, WithText, WithItemsOfCorner {
    iconCorner?: icon_variant;
}

// noinspection JSUnusedGlobalSymbols
export default Corner;
