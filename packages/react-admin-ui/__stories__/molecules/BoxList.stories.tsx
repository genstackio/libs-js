import { args, s, a } from '../utils';
import { BoxList } from '../../src';

export default {
    title: 'Molecules/BoxList',
    component: BoxList,
    argTypes: a({
        items: args.items,
        color: args.color,
        variant: args.blockVariant,
    }),
};

const Template = (args) => <BoxList {...args} />;

export const basic = s(Template, {
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
