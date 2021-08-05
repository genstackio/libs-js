import ItemCarroussel from '../../src/organisms/ItemCarroussel';
import { args, a, s } from '../utils';

export default {
    title: 'Organisms/ItemCarroussel',
    component: ItemCarroussel,
    argTypes: a({
        items: args.items,
        title: args.title,
    }),
};

const item0 = {
    title: 'Mon Produit',
    label: 'Compatible Mac, PC & Linux',
    buttonLabel: 'Découvrir',
    buttonTarget: 'https://www.google.com',
    buttonType: 'tertiary',
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
};

const item1 = {
    title: 'Mon Produit',
    label: '39,90€',
    buttonLabel: 'Découvrir',
    buttonTarget: 'https://www.google.com',
    buttonType: 'tertiary',
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
};

const item2 = {
    title: 'Mon Produit',
    label: 'App iPhone & Android',
    buttonLabel: 'Découvrir',
    buttonTarget: 'https://www.google.com',
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
};

const item3 = {
    title: 'Mon autre produit',
    label: "Pas d'écran, place à l'imagination",
    buttonLabel: 'buttonLabel',
    buttonTarget: 'https://www.google.fr',
    buttonTarget2: 'https://www.facebook.fr',
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
};

const item4 = {
    buttonLabel: 'Découvrir',
    buttonTarget: () => console.log('click'),
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
};

const Template = (args) => <ItemCarroussel {...args} />;

export const basic = s(Template, {
    title: 'Découvrez aussi ...',
    items: [item0, item1, item2],
});

export const manyManyItemsWithInfosOnFirst = s(Template, {
    title: 'Découvrez aussi ...',
    items: [item3, item1, item2, item0, item1, item2, item0, item1, item2, item0, item1, item2],
});

export const manyManyItemsWithNoInfosOnFirst = s(Template, {
    title: 'Découvrez aussi ...',
    items: [item4, item1, item2, item0, item1, item2, item0, item1, item2, item0, item1, item2],
});
