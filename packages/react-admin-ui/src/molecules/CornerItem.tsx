import Tag from '../atoms/Tag';
import Div from '../atoms/Div';
import { icon_variant } from '../types';
import { AsBox } from '../as';
import { WithIcon, WithItemsOfCorner, WithText } from '../withs';

const defaultItems = [];

export function CornerItem({
    className,
    color,
    icon,
    iconCorner,
    items = defaultItems,
    text,
    variant,
    ...props
}: CornerItemProps) {
    return (
        <Div py={'xs'}>
            {!!text && <Tag color={color} icon={iconCorner} text={text} variant={variant} />}
            {!text && <Tag icon={'account_balance_icon'} {...props} />}
        </Div>
    );
}

export interface CornerItemProps extends AsBox, WithText, WithItemsOfCorner, WithIcon {
    iconCorner?: icon_variant;
}

// noinspection JSUnusedGlobalSymbols
export default CornerItem;
