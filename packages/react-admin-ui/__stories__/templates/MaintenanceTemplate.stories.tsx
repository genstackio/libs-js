import { args, s, a } from '../utils';
import { MaintenanceTemplate } from '../../src';

export default {
    title: 'Templates/MaintenanceTemplate',
    component: MaintenanceTemplate,
    argTypes: a({
        color: args.color,
        image: args.image,
        title: args.title,
        description: args.description,
        label: args.btnLabel,
        variant: args.blockVariant,
    }),
};

export const basic = s(MaintenanceTemplate, {
    logo: 'settings',
    title: 'MAINTENANCE',
    description: 'Our Site is Currently under maintenance We will be back Shortly. Thank You For Patience',
    actions: [
        {
            color: 'primary',
            variant: 'contained',
            label: 'BACK TO HOME PAGE',
            target: './',
        },
    ],
});
