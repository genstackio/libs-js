import { args, s, a } from '../../utils';
import { FiguresChart } from '../../../src';

export default {
    title: 'Molecules/charts/FiguresChart',
    component: FiguresChart,
    argTypes: a({
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        chart: args.chart,
        color: args.color,
        variant: args.blockVariant,
        p: args.padding,
    }),
};

export const basic = s(FiguresChart, {
    items: [
        {
            color: ['#7366FF'],
            series: [[400, 900, 800, 1000, 700, 1200, 300]],
            value: 1001,
            name: 'Purchase',
        },
        {
            color: ['#F73164'],
            series: [[400, 600, 900, 800, 1000, 1200, 500]],
            value: 1005,
            name: 'Sales',
        },
        {
            color: ['#7366FF'],
            series: [[1100, 900, 600, 1000, 700, 1200, 300]],
            value: 100,
            name: 'Sales return',
        },
        {
            color: ['#F73164'],
            series: [[400, 600, 800, 1000, 700, 1100, 300]],
            value: 101,
            name: 'Purchase ret',
        },
    ],
});
