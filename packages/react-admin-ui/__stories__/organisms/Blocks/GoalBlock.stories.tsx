import {s} from "../../utils";
import {GoalBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/GoalBlock',
    component: GoalBlock,
    argTypes: {
        values: { control: {type: 'object'} },
        badgeLabel: { control: {type: 'text'} },
        unit: { control: {type: 'select'}, options: [undefined, '$', '€', '£'] },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
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