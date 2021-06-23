import { args, s, a } from '../utils';
import { Breadcrumb } from '../../src';

export default {
    title: 'Molecules/Breadcrumb',
    component: Breadcrumb,
    argTypes: a({
        items: args.items,
        color: args.color,
        toRight: args.toRight,
    }),
};

const Template = (args) => <Breadcrumb {...args} />;

export const basic = s(Template, {
    items: [
        {
            label: 'Home',
            target: 'https://www.google.com/',
        },
        {
            label: 'Library',
            target: 'https://www.google.com/',
        },
        {
            label: 'Data',
            target: 'https://www.google.com/',
        },
    ],
});
