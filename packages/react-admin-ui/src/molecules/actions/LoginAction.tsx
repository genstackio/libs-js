import LoginForm, { LoginFormProps } from '../forms/LoginForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';

export function LoginAction({ onSuccess, ...props }: LoginActionProps) {
    const state = useAction('LOGIN', { onSuccess });
    return <LoginForm {...state} {...props} />;
}
export interface LoginActionProps extends LoginFormProps, FormActionProps {
    onSuccess?: Function;
}

export default LoginAction;
