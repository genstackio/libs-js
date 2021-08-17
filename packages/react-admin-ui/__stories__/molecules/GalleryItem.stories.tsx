import { args, s, a } from '../utils';
import { GalleryItem } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/GalleryItem',
    component: GalleryItem,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(GalleryItem, {
    image: data.item.image,
    target: data.item.target,
});
