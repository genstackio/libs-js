import { args, s, a } from '../../utils';
import { BackgroundCircularChart } from '../../../src';

export default {
    title: 'Molecules/charts/BackgroundCircularChart',
    component: BackgroundCircularChart,
    argTypes: a({
        color: args.color,
        value: args.value,
    }),
};

export const basic = s(BackgroundCircularChart, {
    value: 35,
    image: {
        url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    summaries: [
        {
            value: '1001M',
            unit: 'Year',
            percentage: 54,
        },
        {
            value: '1005M',
            unit: 'Month',
            percentage: 0,
        },
        {
            value: '100M',
            unit: 'Today',
            percentage: 24,
        },
    ],
});
