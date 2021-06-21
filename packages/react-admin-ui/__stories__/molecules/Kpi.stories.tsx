import {args, s, a} from "../utils";
import {Kpi} from '../../src';

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
}

const Template = args => <Kpi {...args} />;

export const basic = s(Template, {
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-database">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>),
    name: 'Earnings',
    quantity: 6659,
});
