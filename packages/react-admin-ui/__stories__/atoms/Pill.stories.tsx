import {args, s} from '../utils';
import {Pill} from '../../src';

export default {
    title: 'Atoms/Pill',
    component: Pill,
    argTypes: {
        text: args.text,
        color: args.color,
        variant: args.blockVariant,
    },
}
const Template = args => (<Pill {...args} />);

export const basic = s(Template, {
    text: "8",
})