import { args, s, a } from '../../../utils';
import { CreateUserForm } from '../../../../src';

export default {
    title: 'Molecules/forms/crud/CreateUserForm',
    component: CreateUserForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

export const basic = s(CreateUserForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
});
