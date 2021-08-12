import { args, s, a } from '../utils';
import { ContentItemsMosaic } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ContentItemsMosaic',
    component: ContentItemsMosaic,
    argTypes: a({
        title: args.title,
        items: args.items,
    }),
};

export const basic = s(ContentItemsMosaic, {
    title: data.common.title,
    items: [
        {
            title: 'Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo, consectetur adipiscing elit. Scelerisque leo.',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            btnTarget: 'https://google.fr',
        },
        {
            title: 'Long Long Long Long Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo.',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            btnTarget: 'https://google.fr',
        },
        {
            title: 'Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo.',
            image: {
                url: 'https://picsum.photos/200/200',
            },
            btnTarget: 'https://google.fr',
        },
        {
            title: 'Long Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo, consectetur adipiscing elit. Scelerisque leo.',
            image: { url: 'https://via.placeholder.com/100x100?text=Image' },
            btnTarget: 'https://google.fr',
        },
    ],
});
