import { args, s, a } from '../utils';
import { AppWallItem } from '../../src';

export default {
    title: 'Atoms/AppWallItem',
    component: AppWallItem,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <AppWallItem {...args} />;

export const basic = s(Template, {
    title: 'Title',
    image: {
        url: 'https://picsum.photos/200/200',
    },
    target: 'https://www.google.com/',
});
