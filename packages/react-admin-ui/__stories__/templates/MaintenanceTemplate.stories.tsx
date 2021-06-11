import {args, s} from "../utils";
import {MaintenanceTemplate} from '../../src';

export default {
    title: 'Templates/MaintenanceTemplate',
    component: MaintenanceTemplate,
    argTypes: {
        color: args.color,
        image: args.image,
        title: args.title,
        description: args.description,
        label: args.btnLabel,
        variant: args.blockVariant,
    },
}

const Template = args => <MaintenanceTemplate {...args} />

export const basic = s(Template, {
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
    ]
});