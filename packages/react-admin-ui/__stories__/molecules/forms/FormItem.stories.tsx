import { args, a, s } from '../../utils';
import { FormItem } from '../../../src';

export default {
    title: 'Molecules/forms/FormItem',
    component: FormItem,
    argTypes: a({
        definition: args.definition,
    }),
};

const Template = (args) => <FormItem {...args} />;

export const basic = s(Template, {
    definition: { type: 'field', field: 'email', required: true, autofocus: true },
});
