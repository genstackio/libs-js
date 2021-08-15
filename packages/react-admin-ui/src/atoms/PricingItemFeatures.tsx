import Items from './Items';
import Column, { ColumnProps } from './Column';
import PricingItemFeature from './PricingItemFeature';
import { pricing_item } from '../types';

export function PricingItemFeatures({ item, ...props }: PricingItemFeaturesProps) {
    return (
        <Column center spaced={3} {...props}>
            <Items component={PricingItemFeature} items={item.features} />
        </Column>
    );
}

export interface PricingItemFeaturesProps extends ColumnProps {
    item: pricing_item;
}

// noinspection JSUnusedGlobalSymbols
export default PricingItemFeatures;
