import { args, a, s } from '../utils';
import { Slide } from '../../src';

export default {
    title: 'Atoms/Slide',
    component: Slide,
    argTypes: a({
        slide: args.slide,
        index: args.index,
    }),
};

const Template = (args) => <Slide {...args} />;

export const basic = s(Template, {
    slide: { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
    index: 0,
});
