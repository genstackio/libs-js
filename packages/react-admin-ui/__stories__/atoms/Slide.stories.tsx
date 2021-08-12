import { args, a, s } from '../utils';
import { Slide } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Slide',
    component: Slide,
    argTypes: a({
        slide: args._disabled,
        index: args.index,
    }),
};

const Template = (args) => <Slide {...args} />;

export const basic = s(Template, {
    slide: { image: data.common.image },
    index: 0,
});
