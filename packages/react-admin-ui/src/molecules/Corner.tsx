import Tag from '../atoms/Tag';
import {box_color, box_variant, icon_variant} from "../types";

export function Corner({text, variant, color, iconCorner, items = [], ...props}: CornerProps) {
    return (
        <div>

            {items.map(({text, variant, icon, color}, index) => (
                <div className='py-1'>
                    <Tag key={index} text={text} variant={variant} color={color} icon={iconCorner} {...props} />
                </div>
            ))}
            <Tag text={text} variant={variant} color={color} icon={iconCorner} {...props} />
        </div>
    );
}

export interface CornerProps {
    text?: string,
    variant?: box_variant,
    color?: box_color,
    iconCorner?: icon_variant,
    items?: {text?: string, variant?: box_variant, icon?: string, color?:box_color}[],
}

export default Corner