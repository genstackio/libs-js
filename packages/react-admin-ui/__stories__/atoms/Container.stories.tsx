import { args, s, a } from '../utils';
import { Container } from '../../src';

export default {
    title: 'Atoms/Container',
    component: Container,
    argTypes: a({
        text: args.text,
        color: args.color,
        variant: args.blockVariant,
    }),
};
const Template = (args) => <Container {...args} />;

export const basic = s(Template, {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    bgImage: {
        url: 'https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
});
