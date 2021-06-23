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

const Template = (args) => <CircleChart {...args} />;

export const basic = s(Template, {
    series: [40, 70],
});
