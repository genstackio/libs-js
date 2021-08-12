import { args, s, a } from '../../utils';
import { BarChart } from '../../../src';

export default {
    title: 'Molecules/charts/BarChart',
    component: BarChart,
    argTypes: a({
        color: args.color,
        series: args.series,
        labels: args.labels,
    }),
};

export const basic = s(BarChart, {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    series: [
        [40, 90, 80, 40, 90, 80, 40, 90, 80, 40, 90, 80],
        [100, 70, 120, 100, 70, 120, 100, 70, 120, 100, 70, 120],
        [30, 80, 20, 30, 80, 20, 30, 80, 20, 30, 80, 20],
    ],
});
