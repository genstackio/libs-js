import Div from '../atoms/Div';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import { AsComponent } from '../as';
import { WithText } from '../withs';

export function ItemSummaryTitle({ className, separator = '|', text }: ItemSummaryTitleProps) {
    return (
        <Div center flex spaced={2} className={className}>
            <Text text={text} variant={'subtitle'} />
            <Div desktop tablet>
                {separator}
            </Div>
        </Div>
    );
}

export interface ItemSummaryTitleProps extends AsComponent, WithText {
    separator?: rich_text;
}

// noinspection JSUnusedGlobalSymbols
export default ItemSummaryTitle;
