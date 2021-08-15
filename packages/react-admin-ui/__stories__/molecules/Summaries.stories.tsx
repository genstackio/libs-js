import { args, s, a } from '../utils';
import { Summaries, Block } from '../../src';

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
        p: args.padding,
    }),
};

export const basic = s(Summaries, {
    items: [
        {
            value: '1001M',
            unit: 'Year',
            percentage: 54,
        },
        {
            value: '1005M',
            unit: 'Month',
            percentage: 0,
        },
        {
            value: '100M',
            unit: 'Today',
            percentage: 24,
        },
    ],
});

export const inPrimaryBlock = s(
    ({ color, ...args }) => (
        <Block color={color} variant={'contained'}>
            <Summaries {...args} />{' '}
        </Block>
    ),
    {
        items: [
            {
                value: '1001M',
                unit: 'Year',
                percentage: 54,
            },
            {
                value: '1005M',
                unit: 'Month',
                percentage: 0,
            },
            {
                value: '100M',
                unit: 'Today',
                percentage: 24,
            },
        ],
    },
);
