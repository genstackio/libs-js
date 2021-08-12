import { s, a } from '../../utils';
import { EmptyLayoutTemplatePage } from '../../../src';

export default {
    title: 'Templates/Layout/EmptyLayoutTemplatePage',
    component: EmptyLayoutTemplatePage,
    argTypes: a({}),
};

export const basic = s(EmptyLayoutTemplatePage, {});
