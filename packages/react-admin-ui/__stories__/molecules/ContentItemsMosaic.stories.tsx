import { args, s, a } from '../utils';
import { ContentItemsMosaic } from '../../src';

export default {
    title: 'Molecules/ContentItemsMosaic',
    component: ContentItemsMosaic,
    argTypes: a({
        title: args.title,
        items: args.items,
    }),
};

const Template = (args) => <ContentItemsMosaic {...args} />;

export const basic = s(Template, {
    title: 'Pour aller plus loin',
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
