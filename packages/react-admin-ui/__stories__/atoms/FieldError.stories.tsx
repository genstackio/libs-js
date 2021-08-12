import { args, s, a } from '../utils';
import { FieldError } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/FieldError',
    component: FieldError,
    argTypes: a({
        error: args.text,
    }),
};

export const basic = s(FieldError, {
    error: data.common.error,
});
