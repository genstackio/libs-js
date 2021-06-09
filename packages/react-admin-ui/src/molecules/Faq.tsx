import {Accordion} from './';
import {box_color, box_variant} from "../types";

export function Faq ({color, expandIcon, items = [], variant}: FaqProps) {
    return(
        <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} />
    )
}

export interface FaqProps {
    color?: box_color,
    expandIcon: string,
    items: {
        content?: string,
        icon?: string,
        title?: string,
    }[],
    variant?: box_variant,

}