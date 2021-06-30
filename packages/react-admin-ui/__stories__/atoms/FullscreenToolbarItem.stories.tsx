import { s, a } from '../utils';
import { FullscreenToolbarItem } from '../../src';

export default {
    title: 'Atoms/FullscreenToolbarItem',
    component: FullscreenToolbarItem,
    argTypes: a({}),
};

const Template = (args) => <FullscreenToolbarItem {...args} />;

export const basic = s(Template, {});
