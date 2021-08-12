import { s, a } from '../utils';
import { Calendar } from '../../src';

export default {
    title: 'Molecules/Calendar',
    component: Calendar,
    argTypes: a({}),
};

export const basic = s(Calendar, {});
