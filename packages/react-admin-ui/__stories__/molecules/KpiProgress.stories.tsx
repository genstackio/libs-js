import {args, s} from "../utils";
import {KpiProgress} from '../../src';

export default {
    title: 'Molecules/KpiProgress',
    component: KpiProgress,
    argTypes: {
        text: args.title,
        value: args.value,
        unit: args.unit,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <KpiProgress {...args} />;

export const basic = s(Template,  {
    text: "Turnover",
    value: 5348,
    goal: 10000,
    unit: '€',
})