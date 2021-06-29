import { s, a } from '../utils';
import { MainMenu } from '../../src';

export default {
    title: 'Organisms/MainMenu',
    component: MainMenu,
    argTypes: a({}),
};

const Template = (args) => <MainMenu {...args} />;

export const basic = s(Template, {});
