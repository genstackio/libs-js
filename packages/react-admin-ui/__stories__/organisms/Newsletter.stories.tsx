import { args, a, s } from '../utils';
import { Newsletter } from '../../src';

export default {
    title: 'Organisms/Newsletter',
    component: Newsletter,
    argTypes: a({
        title: args.title,
        text: args.text,
        image: args.image,
        btnLabel: args.btnLabel,
        imageLeft: args.imageLeft,
    }),
};

const Template = (args) => <Newsletter {...args} />;

export const basic = s(Template, {
    title: 'Recevez notre newsletter',
    text: 'Subscribe to our newsletter for daily/weekly update of our products and services.',
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
    btnLabel: "S'inscrire",
    imageLeft: true,
});
