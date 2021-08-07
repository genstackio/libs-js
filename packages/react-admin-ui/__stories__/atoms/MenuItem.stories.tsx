import { args, s, a } from '../utils';
import { MenuItem } from '../../src';

export default {
    title: 'Atoms/MenuItem',
    component: MenuItem,
    argTypes: a({
        label: args.label,
        icon: args.icon,
        target: args.target,
        active: args.flag,
        className: args._disabled,
        color: args.color,
        variant: args.boxVariant,
    }),
};

const Template = (args) => <MenuItem {...args} />;

export const basic = s(Template, {
    label: 'Calendar',
    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
    active: false,
});

export const withIcon = s(Template, {
    icon: 'calendar_today',
    label: 'Calendar',
    target: 'https://www.google.com',
    active: false,
});
