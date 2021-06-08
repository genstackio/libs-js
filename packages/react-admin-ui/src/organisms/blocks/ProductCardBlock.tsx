import clsx from "clsx";
import {box_color, image} from "../../types";
import Block from '../../atoms/Block';
import colorClass from "../../utils/colorClass";
import {Image, Text} from "../../atoms";
import {Rating} from "../../molecules";
import {useCallback} from "react";

export function ProductCardBlock({color = 'primary', description, image, initialPrice, onClick, price, rating, title}: ProductCardBlockProps) {
    const handleClick = useCallback (() => {
        ('function' === typeof onClick) && onClick();
        ('string' === typeof onClick) && (location.href = onClick);
    }, [onClick]);
    return (
        <div onClick={handleClick}>
            <Block>
                {image && <Image url={image.url} alt={image.alt} />}
                {rating && <div className='mt-4'><Rating defaultValue={rating} /></div>}
                <Text variant="title5" text={title} />
                <Text variant="description" text={description} />
                <div className='flex inline font-extrabold mt-2'>
                    <div className={clsx(colorClass({color}))}><Text variant='title6' text={price} /></div>
                    <div className='pl-8'><Text variant='cross' text={initialPrice} /></div>
                </div>
            </Block>
        </div>
    );
}

export interface ProductCardBlockProps  {
    color?: box_color,
    description?: string,
    image: image,
    initialPrice?: string,
    onClick?: Function|string,
    price?: string,
    rating?: number,
    title?: string,
}

export default ProductCardBlock