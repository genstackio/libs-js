import { s, a } from '../utils';
import { MainToolbar } from '../../src';

export default {
    title: 'Organisms/MainToolbar',
    component: MainToolbar,
    argTypes: a({}),
};

export const basic = s(MainToolbar, {});
