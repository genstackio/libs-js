import LoginForm, { LoginFormProps } from '../forms/LoginForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';

export function LoginAction({ component: Component = LoginForm, queryName = 'LOGIN', onSuccess, prepare, ...props }: LoginActionProps) {
    return <Component {...useAction(queryName, { onSuccess, prepare })} {...props} />;
}
export interface LoginActionProps extends LoginFormProps, FormActionProps {
    onSuccess?: Function;
    queryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default LoginAction;
