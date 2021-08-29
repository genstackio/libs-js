import Block from '../../atoms/Block';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Div from '../../atoms/Div';
import Rating from '../../atoms/Rating';
import useBlock from '../../hooks/useButtons';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithDescription, WithImage, WithOnClick, WithTitle } from '../../withs';

export function ProductCardBlock({
    description,
    image,
    initialPrice,
    onClick,
    price,
    rating,
    title,
    ...props
}: ProductCardBlockProps) {
    const [bProps] = useBlock(props, { color: 'primary', onClick });

    return (
        <Block {...bProps}>
            <Image {...image} />
            {rating && (
                <Div mt={'md'}>
                    <Rating defaultValue={rating} />
                </Div>
            )}
            <Text text={title} variant={'title5'} />
            <Text text={description} variant={'description'} />
            <Div flex inline mt={'sm'} className={'font-extrabold'}>
                <div>
                    <Text text={price} variant={'title6'} />
                </div>
                <Div pl={'xl'}>
                    <Text text={initialPrice} variant={'cross'} />
                </Div>
            </Div>
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
