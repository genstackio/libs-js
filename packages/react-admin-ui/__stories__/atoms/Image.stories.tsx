import { args, s, a } from '../utils';
import { Image } from '../../src';

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
    url: 'https://image-placeholder.com/images/actual-size/240x320.png',
    alt: 'img',
});

export const rounded = s(Template, {
    url: 'https://image-placeholder.com/images/actual-size/240x320.png',
    alt: 'img',
    corner: 'rounded',
});

export const circle = s(Template, {
    url: 'https://image-placeholder.com/images/actual-size/240x320.png',
    alt: 'img',
    corner: 'circle',
});
