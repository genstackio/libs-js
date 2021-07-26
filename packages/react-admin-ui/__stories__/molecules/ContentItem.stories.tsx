import { args, s, a } from '../utils';
import { ContentItem } from '../../src';

export default {
    title: 'Molecules/ContentItem',
    component: ContentItem,
    argTypes: a({
        title: args.title,
        items: args.items,
    }),
};

const Template = (args) => <ContentItem {...args} />;

export const basic = s(Template, {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo, consectetur adipiscing elit. Scelerisque leo.',
    image: {
        url: 'https://images.prismic.io/lunii/5ab47cea-6aa5-4ee5-9295-26ee76aa0940_develop-items-module-mosaic-1.png?auto=compress,format',
    },
    btnTarget: 'https://google.fr',
});
