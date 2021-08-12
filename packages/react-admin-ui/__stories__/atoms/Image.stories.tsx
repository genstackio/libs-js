import { args, s, a } from '../utils';
import { Image } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Image',
    component: Image,
    argTypes: a({
        url: args.text,
        alt: args.text,
    }),
};

const Template = (args) => <Image {...args} />;

export const basic = s(Template, {
    ...data.common.image,
});

export const rounded = s(Template, {
    ...data.common.image,
    corner: 'rounded',
});

export const circle = s(Template, {
    ...data.common.image,
    corner: 'circle',
});
