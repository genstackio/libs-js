import { QuoteSwiper } from '../../src/molecules/QuoteSwiper';
import { args, a, s } from '../utils';

export default {
    title: 'Molecules/QuoteSwiper',
    component: QuoteSwiper,
    argTypes: a({
        items: args.items,
    }),
};

const item = {
    image: {
        url: 'https://picsum.photos/200/200',
    },
    overline: 'Konbini',
    title: '"Proposer un jouet tech pour enfant sans écran et sans ondes, il fallait le faire. "',
    buttonLabel: 'Konbini',
    buttonTarget: 'https://www.google.fr',
};
const item2 = {
    overline: 'Le Monde',
    title: '"le monde lemon de de demon leemm lemonndennde demon lem melon"',
};
const item3 = {
    image: {
        url: 'https://picsum.photos/200/200',
    },
    overline: 'Pomme',
    title: '"Pomme pom pom pomomsomomopo mooppmm pompoi moiopompioim oimo imoi moi"',
    buttonLabel: 'Pomme',
    buttonTarget: 'https://www.google.fr',
};

const Template = (args) => <QuoteSwiper {...args} />;

export const basic = s(Template, {
    items: [item, item2, item3],
});
