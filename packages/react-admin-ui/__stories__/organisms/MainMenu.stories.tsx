import { s, a } from '../utils';
import { MainMenu } from '../../src';

export default {
    title: 'Organisms/MainMenu',
    component: MainMenu,
    argTypes: a({}),
};

export const basic = s(MainMenu, {});
