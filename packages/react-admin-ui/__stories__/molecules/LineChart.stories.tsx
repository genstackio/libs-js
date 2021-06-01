import {args, s} from "../utils";
import {LineChart} from '../../src';

export default {
    title: 'Molecules/LineChart',
    component: LineChart,
    argTypes: {
        title: args.title,
        color: args.color,
        variant: args.blockVariant,
        labels: args.labels,
        series: args.series,
    },
}

const Template = args => <LineChart {...args} />;

export const basic = s(Template, {
    title: 'Fondamental Analysis of Stocks',
    series: [
        [8100, 8337, 8700, 8530, 8990, 9130, 9400],
        [18100, 18337, 6700, 6900, 18990, 19130, 19400],
    ],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
});