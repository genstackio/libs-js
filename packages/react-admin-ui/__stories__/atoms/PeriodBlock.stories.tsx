import { args, s, a } from '../utils';
import { PeriodBlock } from '../../src';

export default {
    title: 'Atoms/PeriodBlock',
    component: PeriodBlock,
    argTypes: a({
        color: args.color,
        text: args.text,
        value: args.textValue,
    }),
};

export const basic = s(PeriodBlock, {
    text: 'Daily',
});

export const withValue = s(PeriodBlock, {
    text: 'Daily',
    value: '36%',
});
