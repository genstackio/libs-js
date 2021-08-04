import { args, s, a } from '../utils';
import { ContentItemMosaic } from '../../src';

export default {
    title: 'Molecules/ContentItemMosaic',
    component: ContentItemMosaic,
    argTypes: a({
        title: args.title,
        items: args.items,
    }),
};

const Template = (args) => <ContentItemMosaic {...args} />;

export const basic = s(Template, {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque leo.',
    image: { url: 'https://via.placeholder.com/100x100?text=Image' },
    btnTarget: 'https://google.fr',
});
