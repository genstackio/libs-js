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

export const basic = s(Image, {
    ...data.common.image,
});

export const rounded = s(Image, {
    ...data.common.image,
    corner: 'rounded',
});

export const circle = s(Image, {
    ...data.common.image,
    corner: 'circle',
});
