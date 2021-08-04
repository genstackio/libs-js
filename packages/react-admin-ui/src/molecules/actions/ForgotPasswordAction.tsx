import ForgotPasswordForm, { ForgotPasswordFormProps } from '../forms/ForgotPasswordForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';

export function ForgotPasswordAction({
    component: Component = ForgotPasswordForm,
    queryName = 'CHANGE_PASSWORD',
    onSuccess,
    prepare,
    ...props
}: ForgotPasswordActionProps) {
    return (
        <Component
            {...useAction(queryName, { onSuccess, prepare })}
            onSendVerificationCode={/* todo use FORGOT_PASSWORD */ undefined}
            {...props}
        />
    );
}
export interface ForgotPasswordActionProps extends ForgotPasswordFormProps, FormActionProps {
    queryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default ForgotPasswordAction;
