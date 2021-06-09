import {Accordion} from './';
import {box_color, box_variant} from "../types";

export function Faq ({items = [], color, variant, expandIcon}: FaqProps) {
    return(
        <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} />
    )
}

export interface FaqProps {
    items: {icon?: string, title?: string, content?: string}[],
    color?: box_color,
    variant?: box_variant,
    expandIcon: string,
}