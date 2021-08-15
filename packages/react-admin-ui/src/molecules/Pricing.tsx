import Row from '../atoms/Row';
import Items from '../atoms/Items';
import PricingItem from '../atoms/PricingItem';
import { AsComponent } from '../as';
import { WithItemsOfPricing } from '../withs';

export function Pricing({ className, items = [] }: PricingProps) {
    return (
        <Row className={className} gap={2} grid={items.length}>
            <Items component={PricingItem} itemProp={'item'} items={items} />
        </Row>
    );
}

export interface PricingProps extends AsComponent, WithItemsOfPricing {}

// noinspection JSUnusedGlobalSymbols
export default Pricing;
