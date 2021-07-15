import Accordion from './Accordion';
import { faq_item } from '../types';
import { WithBox, WithClassName } from '../withs';

export function Faq({ className, color, expandIcon, items = [], variant }: FaqProps) {
    return <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} className={className} />;
}

export interface FaqProps extends WithClassName, WithBox {
    expandIcon: string;
    items: faq_item[];
}
