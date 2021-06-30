import { Accordion } from './';
import { box_color, box_variant, class_name, faq_item } from '../types';
import clsx from 'clsx';

export function Faq({ className, color, expandIcon, items = [], variant }: FaqProps) {
    return (
        <Accordion items={items} color={color} variant={variant} expandIcon={expandIcon} className={clsx(className)} />
    );
}

export interface FaqProps {
    className?: class_name;
    color?: box_color;
    expandIcon: string;
    items: faq_item[];
    variant?: box_variant;
}
