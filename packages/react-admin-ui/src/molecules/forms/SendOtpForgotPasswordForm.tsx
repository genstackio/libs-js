import { Button, Text, PhoneField } from '../../atoms';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { box_color } from '../../mappings/box-colors';

export function SendOtpForgotPasswordForm({ onSubmit, color, defaultValues = {} }: SendOtpForgotPasswordFormProps) {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });
    const field = { register, errors, defaultValues };

    return (
        <div className={'w-full flex flex-col'}>
            <div className="w-full flex justify-center">
                <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
                    <Text text={t('form_forgot_password_send_otp_title')} variant={'title6'} color={color} />
                    <Text
                        className={'text-gray-500 mb-4'}
                        text={t('form_forgot_password_send_otp_subtitle')}
                        variant={'body'}
                        color={color}
                    />
                    <PhoneField {...field} required autoFocus />
                    <div className="flex justify-center mt-6">
                        <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>
                            {t('form_forgot_password_send_otp_submit_label')}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export interface SendOtpForgotPasswordFormProps {
    color?: box_color;
    defaultValues?: any;
    onSubmit?: Function;
    onSendVerificationCode?: Function;
    onLoginClick?: Function;
}

export default SendOtpForgotPasswordForm;
