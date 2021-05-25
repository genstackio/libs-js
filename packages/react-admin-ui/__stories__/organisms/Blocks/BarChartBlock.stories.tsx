import {args, s} from "../../utils";
import {BarChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/BarChartBlock',
    component: BarChartBlock,
    argTypes: {
        title: args.title,
        subtitle: args.subtitle,
        value: args.value,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}
const Template = args => <BarChartBlock {...args} />;

export const basic = s(Template, {
    title: 'Marketing Expenses',
    value: '35.00%',
    labels : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    series: [
        [40, 90, 80, 40, 90, 80, 40, 90, 80, 40, 90, 80],
        [100, 70, 120,100, 70, 120,100, 70, 120,100, 70, 120],
        [30, 80, 20,30, 80, 20,30, 80, 20,30, 80, 20],
    ],
});