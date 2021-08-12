import { args, s, a } from '../../utils';
import { RateChart } from '../../../src';

export default {
    title: 'Molecules/charts/RateChart',
    component: RateChart,
    argTypes: a({
        color: args.color,
        value: args.value,
        title: args.title,
        subtitle: args.subtitle,
        overline: args.overline,
    }),
};

export const basic = s(RateChart, {
    value: 70,
    title: 'Selling Rate',
    subtitle: 'As From',
    overline: '24 March 2021',
});
