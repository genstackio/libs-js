import {args, s} from "../../utils";
import {FiguresChart} from '../../../src';

export default {
    title: 'Molecules/charts/FiguresChart',
    component: FiguresChart,
    argTypes: {
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        chart: args.chart,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <FiguresChart {...args} />;


export const basic = s(Template, {
    items: [
        {
            color: ['#7366FF'],
            series: [{data: [400, 900, 800, 1000, 700, 1200, 300]}],
            value: 1001,
            name: 'Purchase',
        },
        {
            color: ['#F73164'],
            series: [{data: [400, 600, 900, 800, 1000, 1200, 500]}],
            value: 1005,
            name: 'Sales',
        },
        {
            color: ['#7366FF'],
            series: [{data: [1100, 900, 600, 1000, 700, 1200, 300]}],
            value: 100,
            name: 'Sales return',
        },
        {
            color: ['#F73164'],
            series: [{data: [400, 600, 800, 1000, 700, 1100, 300]}],
            value: 101,
            name: 'Purchase ret',
        },
    ]
});