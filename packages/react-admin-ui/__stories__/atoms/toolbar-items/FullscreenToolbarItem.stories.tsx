import { s, a } from '../../utils';
import { FullscreenToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/FullscreenToolbarItem',
    component: FullscreenToolbarItem,
    argTypes: a({}),
};

export const basic = s(FullscreenToolbarItem, {});
