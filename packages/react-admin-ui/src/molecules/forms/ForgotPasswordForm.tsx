import { useCallback, useState } from 'react';
import SendOtpForgotPasswordForm from './SendOtpForgotPasswordForm';
import FillInOtpForgotPasswordForm from './FillInOtpForgotPasswordForm';
import CreatePasswordForgotPasswordForm from './CreatePasswordForgotPasswordForm';
import { WithDefaultValues, WithOnSubmit } from '../../withs';

export function ForgotPasswordForm({
    onLoginClick,
    onSendVerificationCode,
    onSubmit,
    ...props
}: ForgotPasswordFormProps) {
    const [state, setState] = useState({ step: 'sendOtp', data: {} });
    const handleSendOtpSubmit = useCallback(
        (data) => {
            onSendVerificationCode && onSendVerificationCode(data);
            setState({ step: 'fillInOtp', data: { ...state.data, ...data } });
        },
        [onSendVerificationCode, setState, state],
    );
    const handleFillInOtpSubmit = useCallback(
        (data) => {
            setState({ step: 'createPassword', data: { ...state.data, ...data } });
        },
        [setState, state],
    );
    const handleCreatePasswordSubmit = useCallback(
        (data) => {
            onSubmit && onSubmit({ ...state.data, ...data });
        },
        [onSubmit, state],
    );

    switch (state.step) {
        case 'fillInOtp':
            return <FillInOtpForgotPasswordForm onSubmit={handleFillInOtpSubmit} {...props} />;
        case 'createPassword':
            return <CreatePasswordForgotPasswordForm onSubmit={handleCreatePasswordSubmit} {...props} />;
        default:
        case 'sendOtp':
            return <SendOtpForgotPasswordForm onSubmit={handleSendOtpSubmit} {...props} />;
    }
}

export interface ForgotPasswordFormProps extends WithDefaultValues, WithOnSubmit {
    onSendVerificationCode?: Function;
    onLoginClick?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default ForgotPasswordForm;
