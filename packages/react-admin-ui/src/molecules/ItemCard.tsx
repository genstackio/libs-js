import {Block} from "../atoms";
import {box_color, box_variant} from "../types";

export function ItemCard({title, subTitle, text, ...props}: ItemCardProps) {
    return (
        <Block variant={props.blockVariant} color={props.blockColor}>
            <div className='absolute left-4'>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className='row-span-1'>
                            <h1 className='font-extrabold text-3xl'>{title}</h1>
                        </div>
                        <div className='flex inline-block row-span-1 -mt-4'>
                            <h2 className='text-gray-400 font-bold'>{subTitle}</h2>
                        </div>
                    </div>
                </div>
            <p className='pt-20'>{text}</p>
        </Block>
    );
}

export interface ItemCardProps {
    title?: string,
    subTitle?: string,
    text?: string,
    blockVariant?: box_variant,
    blockColor?: box_color,
}

export default ItemCard