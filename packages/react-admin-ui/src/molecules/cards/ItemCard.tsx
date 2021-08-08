import Block from '../../atoms/Block';
import Tag from '../../atoms/Tag';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import { box_color, box_variant } from '../../types';
import { WithDescription, WithIcon, WithSubtitle, WithText, WithSizeOfText, WithTitle } from '../../withs';

export function ItemCard({
    colorDate,
    colorDescription,
    date,
    description,
    icon,
    size,
    subtitle,
    title,
    ...props
}: ItemCardProps) {
    return (
        <Block {...props}>
            <div className={'flex justify-between mb-6'}>
                <div className={'flex mb-6'}>
                    <div className={'row-span-2 ml-4 mt-2'}>
                        <Icon size={size} icon={icon} />
                    </div>
                    <div>
                        <Text text={title} variant={'title5'} />
                        <Text text={subtitle} variant={'subtitle'} />
                    </div>
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
