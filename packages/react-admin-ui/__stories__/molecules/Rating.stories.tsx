import {args, s} from "../utils";
import {Rating} from '../../src';

export default {
    title: 'Molecules/Rating',
    component: Rating,
    argTypes: {
        text: args.text,
        defaultValue: args.defaultValue,
        value: args.value,
        onChange: args.onChange,
    },
}

const Template = args => <Rating {...args} />;

export const basic = s(Template, {text: 'Eval'});