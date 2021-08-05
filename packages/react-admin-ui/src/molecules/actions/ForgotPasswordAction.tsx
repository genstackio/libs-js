import ForgotPasswordForm, { ForgotPasswordFormProps } from '../forms/ForgotPasswordForm';
import useAction from '../../hooks/useAction';
import { FormActionProps } from '../forms';
import { WithMutationName } from '../../withs';

export function ForgotPasswordAction({
    component: Component = ForgotPasswordForm,
    mutationName = 'CHANGE_PASSWORD',
    onSuccess,
    prepare,
    ...props
}: ForgotPasswordActionProps) {
    return (
        <Component
            {...useAction(mutationName, { onSuccess, prepare })}
            onSendVerificationCode={/* todo use FORGOT_PASSWORD */ undefined}
            {...props}
        />
    );
}
export interface ForgotPasswordActionProps extends ForgotPasswordFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default ForgotPasswordAction;
