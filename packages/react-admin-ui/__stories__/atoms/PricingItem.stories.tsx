import { args, s, a } from '../utils';
import { PricingItem } from '../../src';

export default {
    title: 'Atoms/PricingItem',
    component: PricingItem,
    argTypes: a({}),
};

const Template = (args) => <PricingItem {...args} />;

export const basic = s(Template, {
    item: {
        features: [
            {
                title: '50GB Disk Space',
            },
            {
                title: '50 Email Accounts',
            },
            {
                title: 'Maintenance',
            },
            {
                title: '15 Subdomains',
            },
        ],
        label: 'Sign Up',
        name: 'standard',
        price: 10,
        variant: 'contained',
    },
});
export const withBackgroundImage = s(Template, {
    item: {
        currency: '$',
        features: [
            {
                title: '50GB Disk Space',
            },
            {
                title: '50 Email Accounts',
            },
            {
                title: 'Maintenance',
            },
            {
                title: '15 Subdomains',
            },
        ],
        image: {
            url: 'https://images.unsplash.com/photo-1557682268-e3955ed5d83f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80',
        },
        label: 'Sign Up',
        name: 'standard',
        period: '/mo',
        price: 10,
        variant: 'contained',
    },
});
