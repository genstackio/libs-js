import { SmallItemCard } from '../../../src';
import { args, s, a } from '../../utils';

export default {
    title: 'Molecules/cards/SmallItemCard',
    component: SmallItemCard,
    argTypes: a({
        title: args.title,
        rating: args.rating,
        image: args.image,
        badges: args.badges,
        closable: args.closable,
        children: args.children,
    }),
};

export const basic = s(SmallItemCard, {
    title: "Fancy Women's Cotton",
    rating: 5,
    image: {
        url: 'https://image-placeholder.com/images/actual-size/75x75.png',
        alt: 'alt',
    },
    badges: [
        {
            variant: 'contained',
            color: 'primary',
            type: 'tag',
            text: 'Processing',
        },
    ],
    closable: true,
    children: (
        <div>
            <div>Price : 210$</div>
            <div className={'text-success'}>In stock</div>
        </div>
    ),
});
