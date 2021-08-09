import Accordion from './Accordion';
import { WithExpandIcon, WithItemsOfFaq } from '../withs';
import { AsBox } from '../as';

export function Faq({ className, color, expandIcon, items = [], variant }: FaqProps) {
    return <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} className={className} />;
}

export interface FaqProps extends AsBox, WithItemsOfFaq, WithExpandIcon {}

// noinspection JSUnusedGlobalSymbols
export default Faq;
