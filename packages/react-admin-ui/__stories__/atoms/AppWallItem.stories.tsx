import { s, a, args } from '../utils';
import { AppWallItem } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/AppWallItem',
    component: AppWallItem,
    argTypes: a({
        b: args.border,
    }),
};

export const basic = s(AppWallItem, {
    title: data.item.title,
    image: data.item.image,
    target: data.item.target,
});

export const withoutTitle = s(AppWallItem, {
    image: data.item.image,
    target: data.item.target,
});
