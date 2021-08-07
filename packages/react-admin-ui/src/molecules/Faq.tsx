import Accordion from './Accordion';
import { WithBox, WithClassName, WithExpandIcon, WithItemsOfFaq } from '../withs';

export function Faq({ className, color, expandIcon, items = [], variant }: FaqProps) {
    return <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} className={className} />;
}

export interface FaqProps extends WithClassName, WithBox, WithItemsOfFaq, WithExpandIcon {}
