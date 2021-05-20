import {args, s} from "../../utils";
import {GoalBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/GoalBlock',
    component: GoalBlock,
    argTypes: {
        values: args.values,
        badgeLabel: args.badgeLabel,
        unit: args.unit,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <GoalBlock {...args} />;

export const basic = s(Template, {
    badgeLabel: "Hot",
    values: {
        current: 95900,
        goal: 150000,
        text: 'Purchase Order Value'
    },
    unit: '€'
});