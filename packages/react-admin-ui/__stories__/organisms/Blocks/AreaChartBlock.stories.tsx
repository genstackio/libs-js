import {args, s} from "../../utils";
import {AreaChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/AreaChartBlock',
    component: AreaChartBlock,
    argTypes: {
        title: args.title,
        subtitle: args.subtitle,
        value: args.value,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}
const Template = args => <AreaChartBlock {...args} />;

export const basic = s(Template, {
    subtitle: 'Today Total sale',
    value: '89.21%',
    stats: '$300056',
    series: [
        [40, 90, 80],
        [100, 70, 120],
        [30, 80, 60],
    ],
});