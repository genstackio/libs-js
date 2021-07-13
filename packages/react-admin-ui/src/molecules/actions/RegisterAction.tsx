import RegisterForm, { RegisterFormProps } from '../forms/RegisterForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function RegisterAction({ onSuccess, ...props }: RegisterActionProps) {
    return <RegisterForm {...useAction('REGISTER', { onSuccess })} {...props} />;
}

export interface RegisterActionProps extends RegisterFormProps, FormActionProps {
    onSuccess?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default RegisterAction;
