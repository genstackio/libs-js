import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Div from '../../atoms/Div';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Column from '../../atoms/Column';
import PhoneField from '../../atoms/fields/PhoneField';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithDefaultValues, WithOnSubmit } from '../../withs';

export function SendOtpForgotPasswordForm({
    className,
    color,
    defaultValues = {},
    onSubmit,
}: SendOtpForgotPasswordFormProps) {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });
    const field = { register, errors, defaultValues };

    return (
        <Column className={className}>
            <Div full flex center>
                <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
                    <Text color={color} text={t('form_forgot_password_send_otp_title')} variant={'title6'} />
                    <Text
                        color={color}
                        mb={'md'}
                        text={t('form_forgot_password_send_otp_subtitle')}
                        variant={'body'}
                        className={'text-dark'}
                    />
                    <PhoneField {...field} autoFocus required />
                    <Div flex center mt={'lg'}>
                        <Button color={color} variant={'contained'} className={'w-full items-center justify-center'}>
                            {t('form_forgot_password_send_otp_submit_label')}
                        </Button>
                    </Div>
                </form>
            </Div>
        </Column>
    );
}

export interface SendOtpForgotPasswordFormProps extends AsComponent, WithColorOfBox, WithDefaultValues, WithOnSubmit {
    onSendVerificationCode?: Function;
    onLoginClick?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default SendOtpForgotPasswordForm;
