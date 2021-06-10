import Tag from '../atoms/Tag';
import {box_color, box_variant, icon_variant} from "../types";

export function Corner({color, iconCorner, items = [], text, variant, ...props}: CornerProps) {
    return (
        <div>

            {items.map(({text, variant, icon, color}, index) => (
                <div className={'py-1'}>
                    <Tag key={index} text={text} variant={variant} color={color} icon={iconCorner} {...props} />
                </div>
            ))}
            <Tag text={text} variant={variant} color={color} icon={iconCorner} {...props} />
        </div>
    );
}

export interface CornerProps {
    color?: box_color,
    iconCorner?: icon_variant,
    items?: {
        color?:box_color,
        icon?: string,
        text?: string,
        variant?: box_variant,
    }[],
    text?: string,
    variant?: box_variant,
}

export default Corner