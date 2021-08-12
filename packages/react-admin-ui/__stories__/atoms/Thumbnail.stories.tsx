import { args, s, a } from '../utils';
import { Thumbnail } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Thumbnail',
    component: Thumbnail,
    argTypes: a({
        image: args.image,
        size: args.size,
        shape: args.shape,
    }),
};

export const basic = s(Thumbnail, {
    image: data.common.image,
});
