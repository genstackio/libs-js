import { useTranslation } from 'react-i18next';
import Column from '../../atoms/Column';
import Clickable from '../../atoms/Clickable';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';
import OtpField from '../../atoms/fields/OtpField';
import Text from '../../atoms/Text';
import Div from '../../atoms/Div';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithDefaultValues, WithOnSubmit } from '../../withs';

export function FillInOtpForgotPasswordForm({
    className,
    color,
    defaultValues = {},
    onResendVerificationCode,
    onSubmit,
}: FillInOtpForgotPasswordFormProps) {
    const { t } = useTranslation();

    return (
        <Column className={className}>
            <Column center mb={'md'}>
                <Text color={color} text={t('form_forgot_password_fill_in_otp_title')} variant={'title6'} />
                <Text
                    color={color}
                    text={t('form_forgot_password_fill_in_otp_subtitle')}
                    variant={'body'}
                    className={'text-disabled mb-4'}
                />
                <Form defaultValues={defaultValues} onSubmit={onSubmit}>
                    <OtpField autoFocus field />
                    <Div center flex mt={'lg'}>
                        <Button color={color} variant={'contained'} className={'w-full items-center justify-center'}>
                            {t('form_forgot_password_fill_in_otp_submit_label')}
                        </Button>
                    </Div>
                </Form>
            </Column>
            {onResendVerificationCode && (
                <Div flex mb={'md'} spaced={2}>
                    <Text color={color} text={t('form_forgot_password_fill_in_otp_not_received')} variant={'body'} />
                    <Clickable
                        inline
                        onClick={onResendVerificationCode as any}
                        className={'text-danger underline cursor-pointer hover:no-underline'}
                    >
                        <Text
                            color={color}
                            text={t('form_forgot_password_fill_in_otp_resend_label')}
                            variant={'body'}
                        />
                    </Clickable>
                </Div>
            )}
        </Column>
    );
}

export interface FillInOtpForgotPasswordFormProps extends AsComponent, WithColorOfBox, WithDefaultValues, WithOnSubmit {
    onResendVerificationCode?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default FillInOtpForgotPasswordForm;
