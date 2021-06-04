import {Block, Tag, Icon} from "../atoms";
import Text from "../atoms/Text";
import {box_color, box_variant} from "../types";

export function ItemCard({title, subTitle, description, date, colorTitle , colorSubTitle, colorDate, colorDescription, blockVariant='outlined', blockColor ='light', icon, size}: ItemCardProps) {
    return (
        <Block variant={blockVariant} color={blockColor} >
            <div className="flex justify-between mb-6">
                <div className="flex mb-6">
                    <div className='row-span-2 ml-4 mt-2'>
                        {icon ? <Icon size={size}  icon={icon} /> : <div/>}
                    </div>
                    <div>
                        <Text text={title} color={colorTitle} variant={'title5'} />
                        <Text text={subTitle} color={colorSubTitle} variant={'subtitle'} />
                    </div>
                </div>
                <div className='mt-2'>{date ? <Text text={date} color={colorDate} variant={'overline'} /> : <Tag text="new"/>}</div>
            </div>
            <Text text={description} color={colorDescription} variant={'body'} />
        </Block>
    );
}

export interface ItemCardProps {
    title?: string,
    subTitle?: string,
    description?: string,
    blockVariant?: box_variant,
    blockColor?: box_color,
    date?: string,
    colorDate?: box_color,
    colorTitle?: box_color,
    colorSubTitle?: box_color,
    colorDescription?: box_color,
    icon?: string,
    size?: number,
    text?: string,
}

export default ItemCard