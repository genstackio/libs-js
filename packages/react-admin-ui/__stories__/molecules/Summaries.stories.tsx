import { args, s, a } from '../utils';
import { Summaries, Block} from '../../src';


export default {
    title: 'Molecules/Summaries',
    component: Summaries,
    argTypes: a({
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        chart: args.chart,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

const Template = (args) => <Summaries {...args} />;

export const basic = s(Template, {
    items: [
        {
            value: 1001,
            unit: 'Year',
            percentage: 54,
        },
        {
            value: 1005,
            unit: 'Month',
            percentage: 0,
        },
        {
            value: 100,
            unit: 'Today',
            percentage: 24,
        },
    ],
});


export const inPrimaryBlock = s(({color, ...args}) => <Block color={color} variant={'contained'}><Template {...args}/> </Block>,
    {
    items: [
        {
            value: 1001,
            unit: 'Year',
            percentage: 54,
        },
        {
            value: 1005,
            unit: 'Month',
            percentage: 0,
        },
        {
            value: 100,
            unit: 'Today',
            percentage: 24,
        },
    ],
});
