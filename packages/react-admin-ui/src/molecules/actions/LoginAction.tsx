import LoginForm, { LoginFormProps } from '../forms/LoginForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';
import { WithMutationName } from '../../withs';

export function LoginAction({
    component: Component = LoginForm,
    mutationName = 'LOGIN',
    onSuccess,
    prepare,
    ...props
}: LoginActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} />;
}
export interface LoginActionProps extends LoginFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default LoginAction;
