import { args, s, a } from '../utils';
import { SummariesItem, Block } from '../../src';

export default {
    title: 'Atoms/SummariesItem',
    component: SummariesItem,
    argTypes: a({
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        chart: args.chart,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

const Template = (args) => <SummariesItem {...args} />;

export const basic = s(Template, {
    value: '1001M',
    unit: 'Year',
    percentage: 54,
});
