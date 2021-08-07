import { ItemCarrousselSlide } from '../../src/molecules/ItemCarrousselSlide';
import { args, a, s } from '../utils';

export default {
    title: 'Molecules/ItemCarrousselSlide',
    component: ItemCarrousselSlide,
    argTypes: a({
        title: args.title,
        label: args.label,
        image: args.image,
    }),
};

const Template = (args) => <ItemCarrousselSlide {...args} />;

export const basic = s(Template, {
    title: 'Mon Produit',
    label: 'Compatible Mac, PC & Linux',
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
});

export const withButton = s(Template, {
    title: 'Mon Produit',
    label: 'Compatible Mac, PC & Linux',
    image: {
        url: 'https://via.placeholder.com/687x426?text=Image',
    },
    btnLabel: 'Click Here',
    btnTarget: 'https://www.google.com',
});

export const withoutImage = s(Template, {
    title: 'Mon Produit',
    label: 'Compatible Mac, PC & Linux',
});
