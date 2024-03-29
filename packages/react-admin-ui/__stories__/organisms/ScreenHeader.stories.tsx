import { args, s, a } from '../utils';
import { ScreenHeader } from '../../src';

export default {
    title: 'Organisms/ScreenHeader',
    component: ScreenHeader,
    argTypes: a({
        items: args.items,
        color: args.color,
    }),
};

export const basic = s(ScreenHeader, {
    items: [
        {
            label: 'Home',
            target: 'https://www.google.com/',
        },
        {
            label: 'Project',
            target: 'https://www.google.com/',
        },
        {
            label: 'Create Project',
            target: 'https://www.google.com/',
        },
    ],
});
