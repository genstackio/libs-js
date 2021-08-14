import { args, s, a } from '../utils';
import { ItemsSection } from '../../src';
import { images, data } from '../data';

export default {
    title: 'Molecules/ItemsSection',
    component: ItemsSection,
    argTypes: a({
        items: args.items,
        title: args.title,
        description: args.description,
    }),
};

export const basic = s(ItemsSection, {
    items: [
        {
            image: {
                url: images.random_square,
            },
            title: data.user.name,
            subtitle: data.user.title,
            color: 'primary',
        },
        {
            image: {
                url: images.random_square,
            },
            title: data.user.name,
            subtitle: data.user.title,
        },
        {
            image: {
                url: images.random_square,
            },
            title: data.user.name,
            subtitle: data.user.title,
        },
        {
            image: {
                url: images.random_square,
            },
            title: data.user.name,
            subtitle: data.user.title,
        },
        {
            image: {
                url: images.random_square,
            },
            title: data.user.name,
            subtitle: data.user.title,
        },
        {
            image: {
                url: images.random_square,
            },
            title: data.user.name,
            subtitle: data.user.title,
        },
    ],
    title: data.common.title,
    description: data.common.content,
});
