import { args, s, a } from '../utils';
import { BoxListPanel } from '../../src';

export default {
    title: 'Molecules/BoxListPanel',
    component: BoxListPanel,
    argTypes: a({
        items: args.items,
        title: args.title,
        color: args.color,
        variant: args.blockVariant,
        onAddClick: args.target,
    }),
};

const Template = (args) => <BoxListPanel {...args} />;

export const basic = s(Template, {
    title: 'Tags',
    color: 'primary',
    variant: 'filled',
    onAddClick: () => alert('New tag'),
    items: [
        {
            label: 'Notification',
            target: () => alert('Notification'),
        },
        {
            label: 'Newsletter',
            target: () => alert('Newsletter'),
        },
        {
            label: 'Business',
            target: () => alert('Business'),
        },
        {
            label: 'Holidays',
            target: () => alert('Holidays'),
        },
        {
            label: 'Important',
            target: () => alert('Important'),
        },
        {
            label: 'Organization',
            target: () => alert('Organization'),
        },
    ],
});