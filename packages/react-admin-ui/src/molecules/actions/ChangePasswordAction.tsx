import ChangePasswordForm, { ChangePasswordFormProps } from '../forms/ChangePasswordForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function ChangePasswordAction({ onSuccess, ...props }: ChangePasswordActionProps) {
    const state = useAction('CHANGE_PASSWORD', { onSuccess });
    return <ChangePasswordForm {...state} {...props} />;
}

export interface ChangePasswordActionProps extends ChangePasswordFormProps, FormActionProps {
    onSuccess?: Function;
}

export default ChangePasswordAction;
