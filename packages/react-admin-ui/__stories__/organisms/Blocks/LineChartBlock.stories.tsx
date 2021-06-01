import {args, s} from "../../utils";
import {LineChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/LineChartBlock',
    component: LineChartBlock,
    argTypes: {
        title: args.title,
        description: args.description,
        labels: args.labels,
        series: args.series,
        color: args.color,
        variant: args.blockVariant,
    },
}

const Template = args => <LineChartBlock {...args} />;

export const basic = s(Template, {
    title: 'Turnover',
    description: 'Fundamental Analysis of Stocks',
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    series: [
        [8100, 8337, 8700, 8530, 8990, 9130, 9400],
        [11100, 11337, 6700, 6900, 11990, 11130, 11400],
    ],
    variant: 'filled',
});