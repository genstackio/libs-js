import {args, s} from "../../utils";
import {ProgressChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/ProgressChartBlock',
    component: ProgressChartBlock,
    argTypes: {
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        series: args.series,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <ProgressChartBlock {...args} />;

export const basic = s(Template, {
    title: 'SALE',
    progress: 90,
    value: 3654.00,
    unit: '$',
    series: [[4, 2, 7, 8, 10, 12, 14]],
});