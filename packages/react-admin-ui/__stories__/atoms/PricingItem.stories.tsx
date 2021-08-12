import { s, a } from '../utils';
import { PricingItem } from '../../src';
import data from '../data';

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
        image: data.common.image,
        label: 'Sign Up',
        name: 'standard',
        period: '/mo',
        price: 10,
        variant: 'contained',
    },
});
