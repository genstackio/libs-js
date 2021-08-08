import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Rating from '../../atoms/Rating';
import { WithColorOfBox, WithDescription, WithImage, WithOnClick, WithTitle } from '../../withs';
import { AsComponent } from '../../as';

export function ProductCardBlock({
    className,
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
        <Block onClick={onClick} className={className}>
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

export interface ProductCardBlockProps
    extends AsComponent,
        WithColorOfBox,
        WithImage,
        WithTitle,
        WithOnClick,
        WithDescription {
    initialPrice?: string;
    price?: string;
    rating?: number;
}

// noinspection JSUnusedGlobalSymbols
export default ProductCardBlock;
