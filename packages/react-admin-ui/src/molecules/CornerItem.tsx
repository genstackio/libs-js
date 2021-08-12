import Tag from '../atoms/Tag';
import { icon_variant } from '../types';
import { WithIcon, WithItemsOfCorner, WithText } from '../withs';
import { AsBox } from '../as';
import clsx from 'clsx';

export function CornerItem({
    className,
    color,
    iconCorner,
    items = [],
    text,
    icon,
    variant,
    ...props
}: CornerItemProps) {
    return (
        <div className={clsx('py-1')}>
            {!!text ? (
                <Tag text={text} variant={variant} color={color} icon={iconCorner} />
            ) : (
                <Tag icon={'account_balance_icon'} {...props} />
            )}
        </div>
    );
}

export interface CornerItemProps extends AsBox, WithText, WithItemsOfCorner, WithIcon {
    iconCorner?: icon_variant;
}

// noinspection JSUnusedGlobalSymbols
export default CornerItem;
