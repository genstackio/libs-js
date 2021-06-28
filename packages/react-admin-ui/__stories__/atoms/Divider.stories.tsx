import { s, a } from '../utils';
import { Divider } from '../../src';

export default {
    title: 'Atoms/Divider',
    component: Divider,
    argTypes: a({}),
};
const Template = (args) => <Divider {...args} />;

export const basic = s(Template, {});
