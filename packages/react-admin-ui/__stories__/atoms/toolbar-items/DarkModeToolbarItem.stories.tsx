import { s, a, args } from '../../utils';
import { DarkModeToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/DarkModeToolbarItem',
    component: DarkModeToolbarItem,
    argTypes: a({
        className: args._disabled,
    }),
};

export const basic = s(DarkModeToolbarItem, {});
