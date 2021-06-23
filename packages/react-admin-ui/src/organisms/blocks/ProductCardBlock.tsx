import { useCallback } from 'react';
import { box_color, image, target } from '../../types';
import { Block, Image, Text } from '../../atoms';
import { Rating } from '../../molecules';

export function ProductCardBlock({
    color = 'primary',
    description,
    image,
    initialPrice,
    onClick,
    price,
    rating,
    title,
}: ProductCardBlockProps) {
    const handleClick = useCallback(() => {
        'function' === typeof onClick && onClick();
        'string' === typeof onClick && (location.href = onClick);
    }, [onClick]);
    return (
        <div onClick={handleClick}>
            <Block>
                {image && <Image url={image.url} alt={image.alt} />}
                {rating && (
                    <div className={'mt-4'}>
                        <Rating defaultValue={rating} />
                    </div>
                )}
                <Text variant={'title5'} text={title} />
                <Text variant={'description'} text={description} />
                <div className={'flex inline font-extrabold mt-2'}>
                    <div>
                        <Text variant={'title6'} text={price} color={color} />
                    </div>
                    <div className={'pl-8'}>
                        <Text variant={'cross'} text={initialPrice} />
                    </div>
                </div>
            </Block>
        </div>
    );
}

export interface ProductCardBlockProps {
    color?: box_color;
    description?: string;
    image: image;
    initialPrice?: string;
    onClick?: target;
    price?: string;
    rating?: number;
    title?: string;
}

export default ProductCardBlock;
