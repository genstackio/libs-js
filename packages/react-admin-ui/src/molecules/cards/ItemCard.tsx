import Tag from '../../atoms/Tag';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import Block from '../../atoms/Block';
import HeadingText from '../../atoms/HeadingText';
import useBlock from '../../hooks/useBlock';
import useHeadingText from '../../hooks/useHeadingText';
import { box_color, box_variant } from '../../types';
import { WithDescription, WithIcon, WithSubtitle, WithText, WithSizeOfText, WithTitle } from '../../withs';

export function ItemCard({ colorDate, colorDescription, date, description, icon, size, ...props }: ItemCardProps) {
    const [bProps, rest] = useBlock(props);
    const [htProps] = useHeadingText(rest, { variant: 'smmd2' });
    return (
        <Block {...bProps}>
            <div className={'flex justify-between mb-6'}>
                <div className={'flex mb-6'}>
                    <div className={'row-span-2 ml-4 mt-2'}>
                        <Icon size={size} icon={icon} />
                    </div>
                    <HeadingText {...htProps} />
                </div>
                <div className={'mt-2'}>{date ? <Text text={date} variant={'overline'} /> : <Tag text={'new'} />}</div>
            </div>
            <Text text={description} variant={'body'} />
        </Block>
    );
}

export interface ItemCardProps extends WithDescription, WithIcon, WithSubtitle, WithText, WithTitle, WithSizeOfText {
    blockColor?: box_color;
    blockVariant?: box_variant;
    colorDate?: box_color;
    colorDescription?: box_color;
    colorSubTitle?: box_color;
    colorTitle?: box_color;
    date?: string;
}

// noinspection JSUnusedGlobalSymbols
export default ItemCard;
