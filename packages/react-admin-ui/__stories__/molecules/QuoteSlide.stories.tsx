import { QuoteSlide } from '../../src/molecules/QuoteSlide';
import { args, a, s } from '../utils';
import { Icon } from '../../src/atoms/Icon';

export default {
    title: 'Molecules/QuoteSlide',
    component: QuoteSlide,
    argTypes: a({
        image: args.image,
        overline: args.overline,
        title: args.title,
    }),
};

const Template = (args) => <QuoteSlide {...args} />;

export const basic = s(Template, {
    image: {
        url: 'https://images.prismic.io/lunii/dce49374-4a9c-40e7-b73f-d693e3acff80_dev-konbini.png?auto=compress,format',
    },
    overline: 'Konbini',
    title: 'Titre',
    button: {
        children: 'Konbini',
        target: 'https://www.google.com',
        color: 'primary',
        variant: 'filled',
        icon: 'fa-fas--arrow-right',
        className: '',
    },
});

export const withoutImage = s(Template, {
    overline: 'Konbini',
    title: 'Titre',
    button: {
        children: 'Konbini',
        target: 'https://www.google.com',
        color: 'primary',
        variant: 'filled',
        icon: 'fa-fas--arrow-right',
    },
});

export const withoutButton = s(Template, {
    image: {
        url: 'https://images.prismic.io/lunii/dce49374-4a9c-40e7-b73f-d693e3acff80_dev-konbini.png?auto=compress,format',
    },
    overline: 'Konbini',
    title: 'Titre',
});
