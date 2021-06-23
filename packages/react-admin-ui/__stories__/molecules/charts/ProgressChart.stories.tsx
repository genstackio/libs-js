import { args, s, a } from '../../utils';
import { ProgressChart } from '../../../src';

export default {
    title: 'Molecules/charts/ProgressChart',
    component: ProgressChart,
    argTypes: a({
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        series: args.series,
        color: args.color,
        variant: args.blockVariant,
    }),
};

const Template = (args) => <ProgressChart {...args} />;

export const basic = s(Template, {
    title: 'SALE',
    progress: 90,
    value: 3654.0,
    unit: '$',
    series: [[4, 2, 7, 8, 10, 12, 14]],
});
