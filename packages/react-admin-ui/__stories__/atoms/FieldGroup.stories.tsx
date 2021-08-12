import { args, s, a } from '../utils';
import { FieldGroup } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/FieldGroup',
    component: FieldGroup,
    argTypes: a({
        children: args.text,
    }),
};

export const basic = s(FieldGroup, {
    children: data.common.content,
});
