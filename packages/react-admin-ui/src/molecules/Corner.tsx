import Tag from '../atoms/Tag';
import { box_color, box_variant, class_name, corner_item, icon_variant, rich_text } from '../types';
import clsx from 'clsx';

export function Corner({ className, color, iconCorner, items = [], text, variant, ...props }: CornerProps) {
    return (
        <div>
            {items.map(({ text, variant, icon, color }, index) => (
                <div key={index} className={clsx('py-1', className)}>
                    <Tag key={index} text={text} variant={variant} color={color} icon={iconCorner} {...props} />
                </div>
            ))}
            {text && <Tag text={text} variant={variant} color={color} icon={iconCorner} {...props} />}
        </div>
    );
}

export interface CornerProps {
    className?: class_name;
    color?: box_color;
    iconCorner?: icon_variant;
    items?: corner_item[];
    text?: rich_text;
    variant?: box_variant;
}

export default Corner;
