import Accordion from './Accordion';
import TextBlock from './TextBlock';
import {menu_item, box_color, box_variant, rich_text} from "../types";

export function Menu ({items = [], title, text, color, variant}: MenuProps) {
    return(
        <div>
            {(title || text) && (
                <div className={'mb-2'}>
                    <TextBlock title={title} text={text} color={color} variant={variant} />
                </div>
            )}
            <Accordion items={items} color={color} variant={variant} />
        </div>
    );
}

export interface MenuProps {
    color?: box_color,
    items: menu_item[],
    title?: rich_text,
    text?: rich_text,
    variant?: box_variant,
}