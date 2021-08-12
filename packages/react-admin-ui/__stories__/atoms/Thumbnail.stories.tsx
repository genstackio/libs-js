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

const Template = (args) => <Thumbnail {...args} />;

export const basic = s(Template, {
    image: data.common.image,
});
