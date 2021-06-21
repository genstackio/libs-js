import {args, s, a} from "../utils";
import {Quote} from '../../src';

export default {
    title: 'Atoms/Quote',
    component: Text,
    argTypes: a({
        position: args.position,
        title: args.title,
        text: args.text,
    }),
}

const Template = args => <Quote {...args}/>;

export const basic = s (Template, {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    title: 'Someone famous in Source Title',
    position: 'left',
})
