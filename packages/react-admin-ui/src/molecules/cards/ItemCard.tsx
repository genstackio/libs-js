import { Block, Tag, Icon, Text } from '../../atoms';
import {box_color, box_variant, icon, rich_text, text_size} from '../../types';

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
                <div className={'mt-2'}>
                    {date ? <Text text={date} variant={'overline'} /> : <Tag text={'new'} />}
                </div>
            </div>
            <Text text={description} variant={'body'} />
        </Block>
    );
}

export interface ItemCardProps {
    blockColor?: box_color;
    blockVariant?: box_variant;
    colorDate?: box_color;
    colorDescription?: box_color;
    colorSubTitle?: box_color;
    colorTitle?: box_color;
    date?: string;
    description?: rich_text;
    icon?: icon;
    subtitle?: rich_text;
    size?: text_size;
    text?: rich_text;
    title?: rich_text;
}

export default ItemCard;
