import { s, a, args } from '../../utils';
import { SearchToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/SearchToolbarItem',
    component: SearchToolbarItem,
    argTypes: a({
        className: args._disabled,
    }),
};

const Template = (args) => <SearchToolbarItem {...args} />;

export const basic = s(Template, {});
