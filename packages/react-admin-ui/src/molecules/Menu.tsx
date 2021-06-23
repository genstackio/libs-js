import Accordion from './Accordion';
import { SectionHeader } from '../atoms';
import { menu_item, box_color, rich_text, accordion_variant } from '../types';
import clsx from 'clsx';

export function Menu({ items = [], title, text, color = 'primary', variant = 'light' }: MenuProps) {
    const hasSection = !!(title || text);
    return (
        <div>
            <SectionHeader title={title} subtitle={text} color={color} />
            <Accordion
                className={clsx('x-m-small', hasSection && 'mt-0')}
                items={items}
                color={color}
                variant={variant}
                expandIcon={'navigate_next'}
            />
        </div>
    );
}

export interface MenuProps {
    color?: box_color;
    items: menu_item[];
    title?: rich_text;
    text?: rich_text;
    variant?: accordion_variant;
}
