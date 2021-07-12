import { ImageCropper } from '../../src';
import { args, s, a } from '../utils';

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
    image: {
        url: 'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg',
        alt: 'an image',
    },
});
