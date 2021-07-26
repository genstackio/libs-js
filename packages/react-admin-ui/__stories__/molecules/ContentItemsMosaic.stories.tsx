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
                url: 'https://images.prismic.io/lunii/5ab47cea-6aa5-4ee5-9295-26ee76aa0940_develop-items-module-mosaic-1.png?auto=compress,format',
            },
            btnTarget: 'https://google.fr',
        },
        {
            title: 'Long Long Long Long Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo.',
            image: {
                url: 'https://images.prismic.io/lunii/afaff385-d8cb-46a1-8f20-cb1912ac92e0_develop-items-module-mosaic-2.png?auto=compress,format',
            },
            btnTarget: 'https://google.fr',
        },
        {
            title: 'Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo.',
            image: {
                url: 'https://images.prismic.io/lunii/b7604837-6ccb-405e-bc7a-aefd566eb8b5_develop-items-module-mosaic-3.png?auto=compress,format',
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
