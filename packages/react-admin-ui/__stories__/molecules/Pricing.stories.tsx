import { args, s, a } from '../utils';
import { Pricing } from '../../src';

export default {
    title: 'Molecules/Pricing',
    component: Pricing,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <Pricing {...args} />;

export const basic = s(Template, {
    items: [
        {
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
        {
            features: [
                {
                    title: '10 % on all product',
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
            name: 'prenium',
            price: 20,
            variant: 'contained',
        },
        {
            features: [
                {
                    title: 'Upload 50 products',
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
            name: 'auther pack',
            price: 50,
            variant: 'contained',
        },
        {
            features: [
                {
                    title: 'Upload 50 products',
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
            name: 'auther pack',
            price: 50,
            variant: 'contained',
        },
    ],
});
export const withBackgroundImage = s(Template, {
    items: [
        {
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
        {
            currency: '$',
            features: [
                {
                    title: '10 % on all product',
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
                url: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80',
            },
            label: 'Sign Up',
            name: 'prenium',
            period: '/mo',
            price: 20,
            variant: 'contained',
        },
        {
            currency: '$',
            features: [
                {
                    title: 'Upload 50 products',
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
            name: 'auther pack',
            period: '/mo',
            price: 50,
            variant: 'contained',
        },
        {
            currency: '$',
            features: [
                {
                    title: 'Upload 50 products',
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
                url: 'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=486&q=80',
            },
            label: 'Sign Up',
            name: 'auther pack',
            period: '/mo',
            price: 50,
            variant: 'contained',
        },
    ],
});
