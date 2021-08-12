import { args, a, s } from '../../utils';
import { FormRow } from '../../../src';

export default {
    title: 'Molecules/forms/FormRow',
    component: FormRow,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(FormRow, {
    items: [
        { type: 'field', field: 'email', required: true, autofocus: true },
        { type: 'field', field: 'password', required: true },
    ],
});
