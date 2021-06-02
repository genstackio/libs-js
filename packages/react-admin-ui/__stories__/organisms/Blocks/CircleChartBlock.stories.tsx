import {args, s} from "../../utils";
import {CircleChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/CircleChartBlock',
    component: CircleChartBlock,
    argTypes: {
        title: args.title,
        subtitle: args.subtitle,
        value: args.value,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}
const Template = args => <CircleChartBlock {...args} />;

export const basic = s(Template, {
    title: 'Skill status',
    series: [
        [40],
        [70],
    ],
});