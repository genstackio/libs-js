import clsx from 'clsx';
import Tag from '../atoms/Tag';
import { icon_variant } from '../types';
import { WithBox, WithClassName, WithItemsOfCorner, WithText } from '../withs';

export function Corner({ className, color, iconCorner, items = [], text, variant, ...props }: CornerProps) {
    return (
        <div>
            {items.map(({ text, variant, icon, color }, index) => (
                <div key={index} className={clsx('py-1', className)}>
                    <Tag text={text} variant={variant} color={color} icon={iconCorner} {...props} />
                </div>
            ))}
            {text && <Tag text={text} variant={variant} color={color} icon={iconCorner} {...props} />}
        </div>
    );
}

export interface CornerProps extends WithClassName, WithBox, WithText, WithItemsOfCorner {
    iconCorner?: icon_variant;
}

export default Corner;
