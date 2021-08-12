import { args, s, a } from '../utils';
import { ContentItemMosaic } from '../../src';
import data from '../data';

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
    title: data.common.title,
    text: data.common.content,
    image: data.common.image,
    btnTarget: data.buttons.button1.target,
});
