import { s, a } from '../utils';
import { PricingItem } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/PricingItem',
    component: PricingItem,
    argTypes: a({}),
};

export const basic = s(PricingItem, {
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
export const withBackgroundImage = s(PricingItem, {
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
        image: data.common.image,
        label: 'Sign Up',
        name: 'standard',
        period: '/mo',
        price: 10,
        variant: 'contained',
    },
});
