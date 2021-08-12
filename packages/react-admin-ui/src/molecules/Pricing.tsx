import clsx from 'clsx';
import { WithItemsOfPricing } from '../withs';
import { AsComponent } from '../as';
import { PricingItem } from '../atoms/PricingItem';

export function Pricing({ className, items = [] }: PricingProps) {
    return (
        <div className={clsx('flex inline', className)}>
            {items.map((item, index) => (
                <PricingItem key={index} item={item} />
            ))}
        </div>
    );
}

export interface PricingProps extends AsComponent, WithItemsOfPricing {}

// noinspection JSUnusedGlobalSymbols
export default Pricing;
