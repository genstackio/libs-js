import { s, a } from '../utils';
import { AppWallItem } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/AppWallItem',
    component: AppWallItem,
    argTypes: a({}),
};

const Template = (args) => <AppWallItem {...args} />;

export const basic = s(Template, {
    title: data.item.title,
    image: data.item.image,
    target: data.item.target,
});
