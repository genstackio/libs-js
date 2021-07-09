import { args, s, a } from '../utils';
import { FeaturedQuote } from '../../src';

export default {
    title: 'Molecules/FeaturedQuote',
    component: FeaturedQuote,
    argTypes: a({
        text: args.text,
        title: args.title,
        subtitle: args.price,
        color: args.color,
    }),
};

const Template = (args) => <FeaturedQuote {...args} />;

export const basic = s(Template, {
    text: 'Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages, and more recently with desktop Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    title: 'Poio Klot',
    subtitle: 'Developer',
});
