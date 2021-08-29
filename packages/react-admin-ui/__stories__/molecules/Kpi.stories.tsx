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
        p: args.padding,
    }),
};

export const basic = s(Kpi, {
    icon: data.common.icon,
    name: 'Earnings',
    quantity: data.common.quantity,
});
