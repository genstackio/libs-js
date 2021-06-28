import RegisterForm, { RegisterFormProps } from '../forms/RegisterForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function RegisterAction({ onSuccess, ...props }: RegisterActionProps) {
    const state = useAction('REGISTER', { onSuccess });
    return <RegisterForm {...state} {...props} />;
}

export interface RegisterActionProps extends RegisterFormProps, FormActionProps {
    onSuccess?: Function;
}

export default RegisterAction;
