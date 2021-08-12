import { args, s, a } from '../utils';
import { FiguresChartItem } from '../../src';

export default {
    title: 'Atoms/FiguresChartItem',
    component: FiguresChartItem,
    argTypes: a({
        name: args.name,
        value: args.value,
        color: args.color,
        key: args.number,
        series: args.items,
    }),
};

const Template = (args) => <FiguresChartItem {...args} />;

export const basic = s(Template, {
    color: ['#7366FF'],
    series: [{ data: [400, 900, 800, 1000, 700, 1200, 300] }],
    value: 1001,
    name: 'Purchase',
});
