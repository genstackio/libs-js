import { ImageUploader } from '../../src';
import { args, s, a } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/ImageUploader',
    component: ImageUploader,
    argTypes: a({
        color: args.color,
        variant: args.accordionVariant,
        image: args.image,
        onChange: args.onChange,
    }),
};

export const basic = s(ImageUploader, {
    image: data.common.image,
    btnLabel: 'Upload!',
});
