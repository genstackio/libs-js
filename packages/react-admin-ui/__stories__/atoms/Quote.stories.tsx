import { args, s, a } from '../utils';
import { Quote } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Quote',
    component: Text,
    argTypes: a({
        position: args.position,
        title: args.title,
        text: args.text,
    }),
};

const Template = (args) => <Quote {...args} />;

export const basic = s(Template, {
    text: data.common.content,
    title: data.common.title,
    position: 'left',
});

export const onRightSide = s(Template, {
    text: data.common.content,
    title: data.common.title,
    position: 'right',
});
