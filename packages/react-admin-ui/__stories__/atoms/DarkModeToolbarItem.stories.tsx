import { s, a, args } from '../utils';
import { DarkModeToolbarItem } from '../../src';

export default {
    title: 'Atoms/DarkModeToolbarItem',
    component: DarkModeToolbarItem,
    argTypes: a({
        className: args._disabled,
    }),
};

const Template = (args) => <DarkModeToolbarItem {...args} />;

export const basic = s(Template, {});
