import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import { AsComponent } from '../as';
import { WithIcon, WithText } from '../withs';

export function ItemSummaryItem({ className, icon, iconSize = 'lg', text }: ItemSummaryItemProps) {
    return (
        <Div flex center spaced={2} className={className}>
            <Icon icon={icon} size={iconSize} />
            <Text text={text} variant={'subtitle'} />
        </Div>
    );
}

export interface ItemSummaryItemProps extends AsComponent, WithIcon, WithText {}

// noinspection JSUnusedGlobalSymbols
export default ItemSummaryItem;
