import { args, s, a } from '../utils';
import { SearchBar } from '../../src';

export default {
    title: 'Atoms/SearchBar',
    component: SearchBar,
    argTypes: a({}),
};

const Template = (args) => <SearchBar {...args} />;

export const basic = s(Template, {
    placeholder: 'Search...',
});