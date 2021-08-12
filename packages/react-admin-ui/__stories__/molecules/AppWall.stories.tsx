import { args, s, a } from '../utils';
import { AppWall } from '../../src';
import data from '../data';

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
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
    ],
});

export const manyItems = s(Template, {
    items: [
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
        {
            title: data.item.title,
            image: data.item.image,
            target: data.item.target,
        },
    ],
});
