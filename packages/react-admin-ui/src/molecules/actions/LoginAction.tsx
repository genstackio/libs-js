import LoginForm, { LoginFormProps } from '../forms/LoginForm';
import useAction from '../../hooks/useAction';

export function LoginAction(props: LoginActionProps) {
    const state = useAction('LOGIN');
    return <LoginForm {...state} {...props} />;
}
export type LoginActionProps = LoginFormProps;

export default LoginAction;
