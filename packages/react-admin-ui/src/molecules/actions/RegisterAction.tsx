import RegisterForm, { RegisterFormProps } from '../forms/RegisterForm';
import FormActionProps from '../forms/FormActionProps';
import useAction from '../../hooks/useAction';
import { WithMutationName } from '../../withs';

export function RegisterAction({
    component: Component = RegisterForm,
    mutationName = 'REGISTER',
    onSuccess,
    prepare,
    ...props
}: RegisterActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} />;
}

export interface RegisterActionProps extends RegisterFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default RegisterAction;
