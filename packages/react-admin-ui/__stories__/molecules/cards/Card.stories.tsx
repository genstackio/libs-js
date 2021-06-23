import { args, s, a } from '../../utils';
import { Card } from '../../../src';

export default {
    title: 'Molecules/cards/Card',
    component: Card,
    argTypes: a({
        title: args.title,
        description: args.text,
        color: args.color,
        variant: args.blockVariant,
        onClick: args.onClick,
    }),
};

const Template = (args) => <Card {...args} />;

export const basic = s(Template, {
    image: {
        url: 'https://picsum.photos/1900/500',
        alt: 'image',
    },
    title: 'Web Design',
    description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    content: 'Dec 15, 2019',
    value: 5,
    link: '/',
    variant: 'contained',
    color: 'light,',
});
