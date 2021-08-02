import Clickable from '../../atoms/Clickable';
import LocaleChange from '../../atoms/LocaleChange';
import PasswordField from '../../atoms/fields/PasswordField';
import RememberPasswordField from '../../atoms/fields/RememberPasswordField';
import Text from '../../atoms/Text';
import { class_name, flag, locale, target } from '../../types';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';
import Button from '../../atoms/Button';
import { useTranslation } from 'react-i18next';

export function UnlockForm({
    children,
    className,
    onRegisterClick,
    onForgotPasswordClick,
    rememberMe = false,
    locales = [],
    ...props
}: UnlockFormProps) {
    const { t } = useTranslation();
    const { Form, field, tf, color } = useForm(props, 'unlock');

    return (
        <Form customChildren={children} className={className}>
            <div className={'mb-6'}>
                <div className={'block text-sm mb-2'}>
                    <div className={'w-full py-2 mb-3 leading-tight focus:outline-none focus:shadow-outline'}>
                        <PasswordField {...field} required autoFocus appendIcon={'fa-far--plus-square'} />
                    </div>
                    <div className={'mb-4 flex items-center justify-between'}>
                        {rememberMe && <RememberPasswordField {...field} />}
                        <Clickable onClick={onForgotPasswordClick as any} optional>
                            <Text text={tf('password_label')} color={color} variant={'body'} />
                        </Clickable>
                    </div>
                    <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>
                        {t('form_unlock_password_send_otp_submit_label')}
                    </Button>
                </div>
            </div>
            <LocaleChange locales={locales} />
        </Form>
    );
}
export interface UnlockFormProps extends BaseFormProps {
    className?: class_name;
    onRegisterClick?: Function;
    onForgotPasswordClick?: target;
    rememberMe?: flag;
    locales?: locale[];
}

// noinspection JSUnusedGlobalSymbols
export default UnlockForm;
