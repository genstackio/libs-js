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

export const basic = s(Quote, {
    text: data.common.content,
    title: data.common.title,
    position: 'left',
});

export const onRightSide = s(Quote, {
    text: data.common.content,
    title: data.common.title,
    position: 'right',
});
