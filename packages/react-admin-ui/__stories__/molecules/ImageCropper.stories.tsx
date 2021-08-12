import { ImageCropper } from '../../src';
import { args, s, a } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/ImageCropper',
    component: ImageCropper,
    argTypes: a({
        items: args.items,
        color: args.color,
        variant: args.accordionVariant,
    }),
};

const Template = (args) => <ImageCropper {...args} />;

export const basic = s(Template, {
    image: data.common.image,
});
