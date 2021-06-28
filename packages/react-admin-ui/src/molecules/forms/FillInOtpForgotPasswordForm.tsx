import { Column, Clickable, Button, Form, OtpField, Text } from '../../atoms';
import { useTranslation } from 'react-i18next';
import { box_color } from '../../mappings/box-colors';

export function FillInOtpForgotPasswordForm({
    onSubmit,
    onResendVerificationCode,
    color,
    defaultValues = {},
}: FillInOtpForgotPasswordFormProps) {
    const { t } = useTranslation();

    return (
        <Column>
            <Column center className={'mb-4'}>
                <Text text={t('form_forgot_password_fill_in_otp_title')} variant={'title6'} color={color} />
                <Text
                    className={'text-gray-500 mb-4'}
                    text={t('form_forgot_password_fill_in_otp_subtitle')}
                    variant={'body'}
                    color={color}
                />
                <Form onSubmit={onSubmit} defaultValues={defaultValues}>
                    <OtpField field autoFocus />
                    <div className={'flex justify-center mt-6'}>
                        <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>
                            {t('form_forgot_password_fill_in_otp_submit_label')}
                        </Button>
                    </div>
                </Form>
            </Column>
            {onResendVerificationCode && (
                <div className={'flex space-x-2 mb-4'}>
                    <Text text={t('form_forgot_password_fill_in_otp_not_received')} variant={'body'} color={color} />
                    <Clickable
                        onClick={onResendVerificationCode as any}
                        className={'text-danger underline cursor-pointer hover:no-underline'}
                        inline
                    >
                        <Text
                            text={t('form_forgot_password_fill_in_otp_resend_label')}
                            variant={'body'}
                            color={color}
                        />
                    </Clickable>
                </div>
            )}
        </Column>
    );
}

export interface FillInOtpForgotPasswordFormProps {
    color?: box_color;
    defaultValues?: any;
    onSubmit?: Function;
    onResendVerificationCode?: Function;
}
export default FillInOtpForgotPasswordForm;
