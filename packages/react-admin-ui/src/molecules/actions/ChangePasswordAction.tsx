import ChangePasswordForm, { ChangePasswordFormProps } from '../forms/ChangePasswordForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function ChangePasswordAction({
    component: Component = ChangePasswordForm,
    queryName = 'CHANGE_PASSWORD',
    onSuccess,
    prepare,
    ...props
}: ChangePasswordActionProps) {
    return <Component {...useAction(queryName, { onSuccess, prepare })} {...props} />;
}

export interface ChangePasswordActionProps extends ChangePasswordFormProps, FormActionProps {
    queryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default ChangePasswordAction;
