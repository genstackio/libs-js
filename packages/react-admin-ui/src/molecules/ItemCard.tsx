import {Block, Tag, Icon, Text} from "../atoms";
import {box_color, box_variant, rich_text} from "../types";

export function ItemCard({blockColor = 'light', blockVariant = 'outlined', colorDate, colorDescription, colorSubTitle, colorTitle, date, description, icon, size, subTitle, title}: ItemCardProps) {
    return (
        <Block variant={blockVariant} color={blockColor} >
            <div className={'flex justify-between mb-6'}>
                <div className={'flex mb-6'}>
                    <div className={'row-span-2 ml-4 mt-2'}>
                        {icon ? <Icon size={size}  icon={icon} /> : <div/>}
                    </div>
                    <div>
                        {title && <Text text={title} color={colorTitle} variant={'title5'} />}
                        {subTitle && <Text text={subTitle} color={colorSubTitle} variant={'subtitle'} />}
                    </div>
                </div>
                <div className={'mt-2'}>{date ? <Text text={date} color={colorDate} variant={'overline'} /> : <Tag text={'new'} />}</div>
            </div>
            {description && <Text text={description} color={colorDescription} variant={'body'} />}
        </Block>
    );
}

export interface ItemCardProps {
    blockColor?: box_color,
    blockVariant?: box_variant,
    colorDate?: box_color,
    colorDescription?: box_color,
    colorSubTitle?: box_color,
    colorTitle?: box_color,
    date?: string,
    description?: rich_text,
    icon?: string,
    subTitle?: rich_text,
    size?: number,
    text?: rich_text,
    title?: rich_text,
}

export default ItemCard