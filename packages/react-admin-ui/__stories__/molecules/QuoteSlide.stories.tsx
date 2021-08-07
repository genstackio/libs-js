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
        url: 'https://picsum.photos/200/200',
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
