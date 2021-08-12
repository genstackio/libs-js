import { args, s, a } from '../../utils';
import { CircleChart } from '../../../src';

export default {
    title: 'Molecules/charts/CircleChart',
    component: CircleChart,
    argTypes: a({
        color: args.color,
        series: args.series,
    }),
};

export const basic = s(CircleChart, {
    series: [40, 70],
});
