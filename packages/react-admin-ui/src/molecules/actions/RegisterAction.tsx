import RegisterForm, { RegisterFormProps } from '../forms/RegisterForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function RegisterAction({
    component: Component = RegisterForm,
    queryName = 'REGISTER',
    onSuccess,
    prepare,
    ...props
}: RegisterActionProps) {
    return <Component {...useAction(queryName, { onSuccess, prepare })} {...props} />;
}

export interface RegisterActionProps extends RegisterFormProps, FormActionProps {
    queryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default RegisterAction;
