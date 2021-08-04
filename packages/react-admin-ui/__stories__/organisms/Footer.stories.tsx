import { args, s, a } from '../utils';
import { Footer } from '../../src';

export default {
    title: 'Organisms/Footer',
    component: Footer,
    argTypes: a({
        description: args.description,
        copyright: { control: 'text' },
        contact: { control: 'object' },
        links: { control: 'object' },
    }),
};

const Template = (args) => <Footer {...args} />;

export const basic = s(Template, {
    description: 'Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue.',
    copyright: '© 2021  Company',
    contact: {
        phone: '(+33) 1 01 01 01 01',
        email: 'contact@company.com',
        address: 'Addresse',
        zipCode: 'cp',
        city: 'city',
        facebook: 'https://www.facebook.fr',
    },
    links: [
        { label: 'Home', target: '#' },
        { label: 'Services', target: '#' },
        { label: 'About Us', target: '#' },
        { label: 'Team', target: '#' },
        { label: 'Privacy Terms', target: '' },
    ],
});

export const withLogo = s(Template, {
    description: 'Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue.',
    copyright: '© 2021  Company',
    logo: {
        url: 'https://image.flaticon.com/icons/png/512/3800/3800024.png',
        alt: 'Slack Logo',
    },
    contact: {
        phone: '(+33) 1 01 01 01 01',
        email: 'contact@company.com',
        address: 'Addresse',
        zipCode: 'cp',
        city: 'city',
        facebook: 'https://www.facebook.fr',
    },
    links: [
        { label: 'Home', target: '#' },
        { label: 'Services', target: '#' },
        { label: 'About Us', target: '#' },
        { label: 'Team', target: '#' },
        { label: 'Privacy Terms', target: '' },
    ],
});
