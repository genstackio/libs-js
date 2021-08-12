import { args, s, a } from '../utils';
import { SearchBar } from '../../src';

export default {
    title: 'Atoms/SearchBar',
    component: SearchBar,
    argTypes: a({
        className: args._disabled,
    }),
};

export const basic = s(SearchBar, {});

export const withDefaultFocus = s(SearchBar, { defaultFocus: true });
