import { args, s, a } from '../../utils';
import { UnlockForm } from '../../../src';

export default {
    title: 'Molecules/forms/UnlockForm',
    component: UnlockForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        onRegisterClick: args._disabled,
        onForgotPasswordClick: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

export const basic = s(UnlockForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    onRegisterClick: () => alert('register clicked!'),
});
