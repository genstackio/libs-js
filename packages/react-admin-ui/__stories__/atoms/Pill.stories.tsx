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
