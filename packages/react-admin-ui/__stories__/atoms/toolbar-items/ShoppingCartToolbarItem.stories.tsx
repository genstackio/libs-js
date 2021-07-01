import { s, a, args } from '../../utils';
import { ShoppingCartToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/ShoppingCartToolbarItem',
    component: ShoppingCartToolbarItem,
    argTypes: a({
        className: args._disabled,
    }),
};

const Template = (args) => <ShoppingCartToolbarItem {...args} />;

export const basic = s(Template, {});
