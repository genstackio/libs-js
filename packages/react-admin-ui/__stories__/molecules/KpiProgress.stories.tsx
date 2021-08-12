import { args, s, a } from '../utils';
import { KpiProgress } from '../../src';

export default {
    title: 'Molecules/KpiProgress',
    component: KpiProgress,
    argTypes: a({
        text: args.title,
        value: args.value,
        unit: args.unit,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

export const basic = s(KpiProgress, {
    text: 'Turnover',
    value: 5348,
    goal: 10000,
    unit: '€',
});
