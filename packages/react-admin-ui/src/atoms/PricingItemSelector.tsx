import clsx from 'clsx';
import Button from './Button';
import Div, { DivProps } from './Div';
import { pricing_item } from '../types';

export function PricingItemSelector({ className, item, ...props }: PricingItemSelectorProps) {
    return (
        <Div className={clsx('uppercase', className)} {...props}>
            <Button {...item} />
        </Div>
    );
}

export interface PricingItemSelectorProps extends DivProps {
    item: pricing_item;
}

// noinspection JSUnusedGlobalSymbols
export default PricingItemSelector;
