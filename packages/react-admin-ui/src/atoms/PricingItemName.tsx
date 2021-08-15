import Text, { TextProps } from './Text';
import { pricing_item } from '../types';

export function PricingItemName({ item }: PricingItemNameProps) {
    return <Text text={item.name} variant={'title4'} upper />;
}

export interface PricingItemNameProps extends TextProps {
    item: pricing_item;
}

// noinspection JSUnusedGlobalSymbols
export default PricingItemName;
