import { s, a, args } from '../../utils';
import { FavoriteToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/FavoriteToolbarItem',
    component: FavoriteToolbarItem,
    argTypes: a({
        className: args._disabled,
    }),
};

const Template = (args) => <FavoriteToolbarItem {...args} />;

export const basic = s(Template, {});
