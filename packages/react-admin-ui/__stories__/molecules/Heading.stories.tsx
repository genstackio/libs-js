import { args, s, a } from '../utils';
import { Heading } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Heading',
    component: Heading,
    argTypes: a({
        text: args.title,
        items: args.items,
    }),
};

const Template = (args) => <Heading {...args} />;

export const basic = s(Template, {
    text: data.common.title,
});
