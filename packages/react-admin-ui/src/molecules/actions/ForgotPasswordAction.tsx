import ForgotPasswordForm, { ForgotPasswordFormProps } from '../forms/ForgotPasswordForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';

export function ForgotPasswordAction({ onSuccess, ...props }: ForgotPasswordActionProps) {
    return (
        <ForgotPasswordForm
            {...useAction('CHANGE_PASSWORD', { onSuccess })}
            onSendVerificationCode={/* todo use FORGOT_PASSWORD */ undefined}
            {...props}
        />
    );
}
export interface ForgotPasswordActionProps extends ForgotPasswordFormProps, FormActionProps {
    onSuccess?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default ForgotPasswordAction;
