import Text from './Text';
import Div, { DivProps } from './Div';
import { pricing_item } from '../types';

export function PricingItemPrice({ item, ...props }: PricingItemPriceProps) {
    return (
        <Div center corner={'circle'} flex size={'md'} {...props}>
            <Text text={item.currency} variant={'description'} />
            <Text text={`${item.price}`} variant={'title1'} />
            <Text text={item.period} variant={'subtitle'} />
        </Div>
    );
}

export interface PricingItemPriceProps extends DivProps {
    item: pricing_item;
}

// noinspection JSUnusedGlobalSymbols
export default PricingItemPrice;
