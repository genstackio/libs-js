import {Accordion} from './';
import {TextBlock} from './';
import {badge_variant, box_color, box_variant} from "../types";

export function Menu ({items= [], title, text, color, variant}: MenuProps) {
    return(
        <div>
            <div className={'mb-2'}>
                <TextBlock title={title} text={text} color={color} variant={variant} />
            </div>
            <Accordion items={items} color={color} variant={variant} />
        </div>
    )
}

export interface MenuProps {
    title?: string,
    text?: string,
    items: {icon?: string, title?: string, badge?: {type: badge_variant, variant: box_variant, label: string, color: box_color}, content?: string | any[]}[]
    color?: box_color,
    type?: badge_variant,
    variant?: box_variant,
}