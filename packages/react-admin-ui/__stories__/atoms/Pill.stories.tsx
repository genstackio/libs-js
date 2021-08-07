import { args, s, a } from '../utils';
import { Pill } from '../../src';

export default {
    title: 'Atoms/Pill',
    component: Pill,
    argTypes: a({
        text: args.text,
        color: args.color,
        variant: args.blockVariant,
    }),
};
const Template = (args) => <Pill {...args} />;

export const basic = s(Template, {
    text: '8',
});

export const withLongText = s(Template, {
    text: 'My name is BIll and I am a Pill',
    variant: 'contained',
    color: 'primary',
});
