import { args, s, a } from '../utils';
import { SearchBar } from '../../src';

export default {
    title: 'Atoms/SearchBar',
    component: SearchBar,
    argTypes: a({
        className: args._disabled,
    }),
};

const Template = (args) => <SearchBar {...args} />;

export const basic = s(Template, {});

export const withDefaultFocus = s(Template, { defaultFocus: true });
