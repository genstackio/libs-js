import {args, s} from "../../utils";
import {FiguresChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/FiguresChartBlock',
    component: FiguresChartBlock,
    argTypes: {
        items: args.items,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <FiguresChartBlock {...args} />;
const primaryOptions =  { colors: ["#7366FF"]};
const secondaryOptions =  {colors: ["#F73164"]};


export const basic = s(Template, {
    items: [
        {
            options: primaryOptions,
            series: [{data: [400, 900, 800, 1000, 700, 1200, 300]}],
            value: 1001,
            name: 'Purchase',
            color: 'dark'
        },
        {
            options: secondaryOptions,
            series: [{data: [400, 600, 900, 800, 1000, 1200, 500]}],
            value: 1005,
            name: 'Sales',
            color: 'dark'
        },
        {
            options: primaryOptions,
            series: [{data: [1100, 900, 600, 1000, 700, 1200, 300]}],
            value: 100,
            name: 'Sales return',
            color: 'dark'
        },
        {
            options: secondaryOptions,
            series: [{data: [400, 600, 800, 1000, 700, 1100, 300]}],
            value: 101,
            name: 'Purchase ret',
            color: 'dark'
        },
    ]
});