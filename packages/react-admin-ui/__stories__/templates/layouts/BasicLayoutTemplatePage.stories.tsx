import { s, a } from '../../utils';
import { BasicLayoutTemplatePage } from '../../../src';

export default {
    title: 'Templates/Layout/BasicLayoutTemplatePage',
    component: BasicLayoutTemplatePage,
    argTypes: a({}),
};

const Template = (args) => <BasicLayoutTemplatePage {...args} />;

export const basic = s(Template, {});
