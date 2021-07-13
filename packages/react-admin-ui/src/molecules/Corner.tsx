import clsx from 'clsx';
import Tag from '../atoms/Tag';
import { corner_item, icon_variant } from '../types';
import { WithBox, WithClassName, WithText } from '../withs';

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

export interface CornerProps extends WithClassName, WithBox, WithText {
    iconCorner?: icon_variant;
    items?: corner_item[];
}

export default Corner;
