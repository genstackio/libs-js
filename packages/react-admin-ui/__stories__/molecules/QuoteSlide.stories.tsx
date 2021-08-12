import { QuoteSlide } from '../../src/molecules/QuoteSlide';
import { args, a, s } from '../utils';
import data from '../data';

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
    image: data.common.image,
    overline: data.common.overline,
    title: data.common.title,
    button: {
        children: data.buttons.button1.label,
        target: data.buttons.button1.target,
        color: 'primary',
        variant: 'filled',
        icon: 'fa-fas--arrow-right',
    },
});

export const withoutImage = s(Template, {
    overline: data.common.overline,
    title: data.common.title,
    button: {
        children: data.buttons.button1.label,
        target: data.buttons.button1.target,
        color: 'primary',
        variant: 'filled',
        icon: 'fa-fas--arrow-right',
    },
});

export const withoutButton = s(Template, {
    image: data.common.image,
    overline: data.common.overline,
    title: data.common.title,
});
