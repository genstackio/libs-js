import { args, s, a } from '../utils';
import { Kpi } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Kpi',
    component: Kpi,
    argTypes: a({
        icon: args.icon,
        name: args.name,
        quantity: args.quantity,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

const Template = (args) => <Kpi {...args} />;

export const basic = s(Template, {
    icon: data.common.icon,
    name: 'Earnings',
    quantity: data.common.quantity,
});
