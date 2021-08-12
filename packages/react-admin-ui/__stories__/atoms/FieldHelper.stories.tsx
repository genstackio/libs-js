import { args, s, a } from '../utils';
import { FieldHelper } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/FieldHelper',
    component: FieldHelper,
    argTypes: a({
        helper: args.text,
    }),
};

export const basic = s(FieldHelper, {
    helper: data.common.helper,
});
