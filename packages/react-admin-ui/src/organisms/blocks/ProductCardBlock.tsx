import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Rating from '../../atoms/Rating';
import useBlock from '../../hooks/useButtons';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithDescription, WithImage, WithOnClick, WithTitle } from '../../withs';

export function ProductCardBlock({
    title,
    description,
    image,
    initialPrice,
    onClick,
    price,
    rating,
    ...props
}: ProductCardBlockProps) {
    const [bProps] = useBlock(props, { color: 'primary', onClick });

    return (
        <Block {...bProps}>
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
                    <Text variant={'title6'} text={price} />
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
