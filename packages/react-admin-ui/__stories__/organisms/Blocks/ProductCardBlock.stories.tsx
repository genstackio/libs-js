import { args, s, a } from '../../utils';
import { ProductCardBlock } from '../../../src';

export default {
    title: 'Organisms/Blocks/ProductCardBlock',
    component: ProductCardBlock,
    argTypes: a({
        color: args.color,
        description: args.description,
        image: args.image,
        initialPrice: args.initialPrice,
        price: args.price,
        rating: args.rating,
        title: args.title,
    }),
};

export const basic = s(ProductCardBlock, {
    description: 'Simply dummy text of the printing.',
    image: {
        url: 'https://picsum.photos/250/400',
        alt: 'alt',
    },
    initialPrice: '$350.00',
    price: '$26.00',
    rating: 5,
    title: "Man's Shirt",
});
export const noObligatory = s(ProductCardBlock, {
    image: {
        url: 'https://picsum.photos/250/400',
        alt: 'alt',
    },
});
