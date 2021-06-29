import { s, a } from '../utils';
import { MainToolbar } from '../../src';

export default {
    title: 'Organisms/MainToolbar',
    component: MainToolbar,
    argTypes: a({}),
};

const Template = (args) => <MainToolbar {...args} />;

export const basic = s(Template, {});
