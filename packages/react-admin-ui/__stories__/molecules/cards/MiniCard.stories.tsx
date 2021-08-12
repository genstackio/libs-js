import { s, a } from '../../utils';
import { MiniCard } from '../../../src';

export default {
    title: 'Molecules/cards/MiniCard',
    component: MiniCard,
    argTypes: a({}),
};

export const basic = s(MiniCard, {
    description: 'Perspicatis unde omnis iste natus error sit.Dummy text',
    image: {
        url: 'https://picsum.photos/550/400',
        alt: 'alt',
    },
    title: '9 April 2018 | by: Admin | 0 Hits',
});
