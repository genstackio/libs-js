import Items from '../atoms/Items';
import CornerItem from './CornerItem';
import { icon_variant } from '../types';
import { AsBox } from '../as';
import { WithItemsOfCorner, WithText } from '../withs';

export function Corner({ className, color, items = [], variant }: CornerProps) {
    return <Items color={color} component={CornerItem} items={items} variant={variant} className={className} />;
}

export interface CornerProps extends AsBox, WithText, WithItemsOfCorner {
    iconCorner?: icon_variant;
}

// noinspection JSUnusedGlobalSymbols
export default Corner;
