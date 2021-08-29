import { args, s, a } from '../../utils';
import { GoalBlock } from '../../../src';

export default {
    title: 'Organisms/Blocks/GoalBlock',
    component: GoalBlock,
    argTypes: a({
        values: args.values,
        badgeLabel: args.badgeLabel,
        unit: args.unit,
        color: args.color,
        variant: args.blockVariant,
        p: args.padding,
    }),
};

export const basic = s(GoalBlock, {
    badgeLabel: 'Hot',
    values: {
        current: 95900,
        goal: 150000,
        text: 'Purchase Order Value',
    },
    unit: '€',
});
