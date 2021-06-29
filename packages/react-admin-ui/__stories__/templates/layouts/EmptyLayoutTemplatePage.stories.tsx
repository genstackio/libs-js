import { s, a } from '../../utils';
import { EmptyLayoutTemplatePage } from '../../../src';

export default {
    title: 'Templates/Layout/EmptyLayoutTemplatePage',
    component: EmptyLayoutTemplatePage,
    argTypes: a({}),
};

const Template = (args) => <EmptyLayoutTemplatePage {...args} />;

export const basic = s(Template, {});
