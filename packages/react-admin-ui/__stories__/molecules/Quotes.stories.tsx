import Quotes from '../../src/molecules/Quotes';
import { args, a, s } from '../utils';

export default {
    title: 'Molecules/Quotes',
    component: Quotes,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <Quotes {...args} />;

const item = {
    image: {
        url: 'https://images.prismic.io/lunii/dce49374-4a9c-40e7-b73f-d693e3acff80_dev-konbini.png?auto=compress,format',
    },
    overline: 'Konbini',
    title: '"Proposer un jouet tech pour enfant sans écran et sans ondes, il fallait le faire. "',
    buttonLabel: 'Konbini',
    buttonTarget: 'https://www.lunii.fr',
};
const item2 = {
    overline: 'Le Monde',
    title: '"le monde lemon de de demon leemm lemonndennde demon lem melon"',
};
const item3 = {
    image: {
        url: 'https://images.prismic.io/lunii/dce49374-4a9c-40e7-b73f-d693e3acff80_dev-konbini.png?auto=compress,format',
    },
    overline: 'Pomme',
    title: '"Pomme pom pom pomomsomomopo mooppmm pompoi moiopompioim oimo imoi moi"',
    buttonLabel: 'Pomme',
    buttonTarget: 'https://www.lunii.fr',
};

export const basic = s(Template, {
    title: 'Ils parlent de nous',
    btnLabel: 'Nos revues de presse',
    btnTarget: 'https://www.lunii.fr',
    items: [item],
});

export const withItems = s(Template, {
    title: 'Ils parlent de nous',
    btnLabel: 'Nos revues de presse',
    btnTarget: 'https://www.lunii.fr',
    items: [item, item2, item3, item, item2, item3],
});

export const withButtonEndIcon = s(Template, {
    title: 'Ils parlent de nous',
    btnLabel: 'Nos revues de presse',
    btnTarget: 'https://www.lunii.fr',
    btnEndIcon: 'fa-fas--arrow-right',
    items: [item],
});

export const withButtonIcon = s(Template, {
    title: 'Ils parlent de nous',
    btnLabel: 'Nos revues de presse',
    btnTarget: 'https://www.lunii.fr',
    btnIcon: 'fa-fas--arrow-right',
    items: [item],
});

export const withoutButton = s(Template, {
    title: 'Ils parlent de nous',
    items: [item],
});

export const withoutTitle = s(Template, {
    btnLabel: 'Nos revues de presse',
    btnTarget: 'https://www.lunii.fr',
    items: [item],
});

export const justItem = s(Template, { items: [item] });

export const justItems = s(Template, { items: [item, item2, item3] });
