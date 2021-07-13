import ChangePasswordForm, { ChangePasswordFormProps } from '../forms/ChangePasswordForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function ChangePasswordAction({ onSuccess, ...props }: ChangePasswordActionProps) {
    return <ChangePasswordForm {...useAction('CHANGE_PASSWORD', { onSuccess })} {...props} />;
}

export interface ChangePasswordActionProps extends ChangePasswordFormProps, FormActionProps {
    onSuccess?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default ChangePasswordAction;
