import { box_color, image, target } from '../../types';
import { Block, Image, Text, Rating } from '../../atoms';

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
    return (
        <Block onClick={onClick}>
            {image && <Image {...image} />}
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
