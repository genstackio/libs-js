import { s, a } from '../utils';
import { Calendar } from '../../src';

export default {
    title: 'Molecules/Calendar',
    component: Calendar,
    argTypes: a({}),
};

const Template = (args) => <Calendar {...args} />;

export const basic = s(Template, {});
