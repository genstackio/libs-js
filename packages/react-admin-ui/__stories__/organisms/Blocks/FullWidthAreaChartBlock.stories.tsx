import {args, s} from "../../utils";
import {FullWidthAreaChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/FullWidthAreaChartBlock',
    component: FullWidthAreaChartBlock,
    argTypes: {
        title: args.title,
        subtitle: args.subtitle,
        value: args.value,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}
const Template = args => <FullWidthAreaChartBlock {...args} />;

export const basic = s(Template, {
    title: (<>Today Total sale <b>89.21%</b></>),
    value: '89.21%',
    overline: '$300056',
    series: [
        [40, 90, 80],
        [100, 70, 120],
        [30, 80, 60],
    ],
});