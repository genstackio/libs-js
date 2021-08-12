import { args, s, a } from '../utils';
import { Gallery } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Gallery',
    component: Gallery,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <Gallery {...args} />;

export const basic = s(Template, {
    items: [
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
    ],
});

export const withHeader = s(Template, {
    items: [
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
    ],
    icon: data.common.icon,
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
});
