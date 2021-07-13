import LoginForm, { LoginFormProps } from '../forms/LoginForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';

export function LoginAction({ onSuccess, ...props }: LoginActionProps) {
    return <LoginForm {...useAction('LOGIN', { onSuccess })} {...props} />;
}
export interface LoginActionProps extends LoginFormProps, FormActionProps {
    onSuccess?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default LoginAction;
