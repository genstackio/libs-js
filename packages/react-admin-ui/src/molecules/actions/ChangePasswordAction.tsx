import ChangePasswordForm, { ChangePasswordFormProps } from '../forms/ChangePasswordForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';
import { WithMutationName } from '../../withs';

export function ChangePasswordAction({
    component: Component = ChangePasswordForm,
    mutationName = 'CHANGE_PASSWORD',
    onSuccess,
    prepare,
    ...props
}: ChangePasswordActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} />;
}

export interface ChangePasswordActionProps extends ChangePasswordFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default ChangePasswordAction;
