import { args, a, s } from '../../utils';
import { FormItem } from '../../../src';

export default {
    title: 'Molecules/forms/FormItem',
    component: FormItem,
    argTypes: a({
        definition: args.definition,
    }),
};

export const basic = s(FormItem, {
    definition: { type: 'field', field: 'email', required: true, autofocus: true },
});
