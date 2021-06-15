import {args, s} from "../utils";
import {PeriodBlock} from '../../src';

export default {
    title: 'Atoms/PeriodBlock',
    component: PeriodBlock,
    argTypes: {
        color: args.color,
        text: args.text,
        value: args.textValue,
    },
}

const Template = args => (<PeriodBlock {...args} />);

export const basic = s(Template, {
    text: 'Daily',
    value: '36%',
})