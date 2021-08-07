import { args, s, a } from '../utils';
import { Dropdown } from '../../src';

export default {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    argTypes: a({
        items: args.items,
        color: args.color,
        variant: args.blockVariant,
    }),
};

const Template = (args) => <Dropdown {...args} />;

export const basic = s(Template, {
    items: [{ name: 'Today' }, { name: 'Tomorrow' }, { name: 'Yesterday' }],
});

export const manyItems = s(Template, {
    items: [
        { name: 'Today' },
        { name: 'Tomorrow' },
        { name: 'Yesterday' },
        { name: 'Monday' },
        { name: 'Tuesday' },
        { name: 'Wednesday' },
        { name: 'Thursday' },
        { name: 'Friday' },
        { name: 'Saturday' },
        { name: 'Sunday' },
    ],
});
