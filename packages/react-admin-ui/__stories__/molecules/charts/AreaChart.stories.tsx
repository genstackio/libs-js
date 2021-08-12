import { args, s, a } from '../../utils';
import { AreaChart } from '../../../src';

export default {
    title: 'Molecules/charts/AreaChart',
    component: AreaChart,
    argTypes: a({
        title: args.title,
        overline: args.overline,
        color: args.color,
        series: args.series,
    }),
};

export const basic = s(AreaChart, {
    series: [
        [40, 90, 80],
        [100, 70, 120],
        [30, 80, 60],
    ],
});
