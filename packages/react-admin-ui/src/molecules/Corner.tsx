import Tag from '../atoms/Tag';
import {box_color, box_variant, corner_item, icon_variant, rich_text} from "../types";

export function Corner({color, iconCorner, items = [], text, variant, ...props}: CornerProps) {
    return (
        <div>
            {items.map(({text, variant, icon, color}, index) => (
                <div className={'py-1'}>
                    <Tag key={index} text={text} variant={variant} color={color} icon={iconCorner} {...props} />
                </div>
            ))}
            {text && <Tag text={text} variant={variant} color={color} icon={iconCorner} {...props} />}
        </div>
    );
}

export interface CornerProps {
    color?: box_color,
    iconCorner?: icon_variant,
    items?: corner_item[],
    text?: rich_text,
    variant?: box_variant,
}

export default Corner