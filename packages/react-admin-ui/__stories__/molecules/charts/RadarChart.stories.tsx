import { args, s, a } from '../../utils';
import { RadarChart } from '../../../src';

export default {
    title: 'Molecules/charts/RadarChart',
    component: RadarChart,
    argTypes: a({
        isMenu: args.isMenu,
        color: args.color,
        variant: args.blockVariant,
        labels: args.labels,
        series: args.series,
    }),
};

export const basic = s(RadarChart, {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    series: [
        {
            name: 'Market value',
            data: [20, 100, 40, 30, 50, 80, 30],
        },
        {
            name: 'Market value 2',
            data: [80, 10, 4, 70, 60, 20, 30],
        },
    ],
});
