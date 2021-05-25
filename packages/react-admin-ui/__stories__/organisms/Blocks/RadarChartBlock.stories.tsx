import {args, s} from "../../utils";
import {RadarChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/RadarChartBlock',
    component: RadarChartBlock,
    argTypes: {
        title: args.title,
        dropdownItems: args.dropdownItems,
        labels: args.labels,
        series: args.series,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <RadarChartBlock {...args} />;

export const basic = s(Template, {
    title: 'Market Value',
    dropdownItems: [
        {name: 'Year'},
        {name: 'Month'},
        {name: 'Day'},
    ],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    series: [{
        name: 'Market value',
        data: [20, 100, 40, 30, 50, 80, 30]
    }],
});