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

export const basic = s(FiguresChartItem, {
    color: ['#7366FF'],
    series: [[400, 900, 800, 1000, 700, 1200, 300]],
    value: 1001,
    name: 'Purchase',
});
