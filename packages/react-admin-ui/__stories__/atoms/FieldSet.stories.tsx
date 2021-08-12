import { args, s, a } from '../utils';
import { FieldSet } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/FieldSet',
    component: FieldSet,
    argTypes: a({
        error: args.text,
        helper: args.text,
        label: args.text,
        name: args.text,
    }),
};

export const basic = s(FieldSet, {
    error: data.common.error,
    helper: data.common.helper,
    label: data.common.label,
    name: 'Label Name',
    options: '',
});

export const children = s(FieldSet, {
    children: data.common.content,
    error: data.common.error,
    helper: data.common.helper,
    label: data.common.label,
    name: 'Label Name',
    options: '',
});
