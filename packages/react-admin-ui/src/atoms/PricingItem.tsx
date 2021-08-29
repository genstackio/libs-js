import Block from './Block';
import PricingItemName from './PricingItemName';
import PricingItemPrice from './PricingItemPrice';
import PricingItemFeatures from './PricingItemFeatures';
import PricingItemSelector from './PricingItemSelector';
import useBox from '../hooks/useBox';
import { pricing_item } from '../types';
import { WithClassName } from '../withs';

export function PricingItem({ className, item }: PricingItemProps) {
    const [box] = useBox(item, { color: 'primary' });

    return (
        <Block
            contentClassName={'space-y-3 flex justify-center items-center flex-col pr-4 pl-4'}
            image={item.image}
            className={className}
        >
            <PricingItemName item={item} />
            <PricingItemPrice box={box} item={item} />
            <PricingItemFeatures item={item} />
            <PricingItemSelector item={item} />
        </Block>
    );
}

export interface PricingItemProps extends WithClassName {
    item: pricing_item;
}

export default PricingItem;
