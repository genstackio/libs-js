import { args, s, a } from '../utils';
import { AppWall } from '../../src';

export default {
    title: 'Molecules/AppWall',
    component: AppWall,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <AppWall {...args} />;

export const basic = s(Template, {
    items: [
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
    ],
});

export const manyItems = s(Template, {
    items: [
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
        {
            title: 'Title',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            target: 'https://www.google.com',
        },
    ],
});
