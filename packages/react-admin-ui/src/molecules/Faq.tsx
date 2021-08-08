import Accordion from './Accordion';
import { WithBox, WithExpandIcon, WithItemsOfFaq } from '../withs';
import { AsComponent } from '../as';

export function Faq({ className, color, expandIcon, items = [], variant }: FaqProps) {
    return <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} className={className} />;
}

export interface FaqProps extends AsComponent, WithBox, WithItemsOfFaq, WithExpandIcon {}

// noinspection JSUnusedGlobalSymbols
export default Faq;
