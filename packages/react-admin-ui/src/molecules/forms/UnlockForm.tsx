import { useTranslation } from 'react-i18next';
import Div from '../../atoms/Div';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Clickable from '../../atoms/Clickable';
import LocaleChange from '../../atoms/LocaleChange';
import PasswordField from '../../atoms/fields/PasswordField';
import RememberPasswordField from '../../atoms/fields/RememberPasswordField';
import { BaseFormProps } from './BaseForm';
import { flag, target } from '../../types';
import useForm from '../../hooks/useForm';
import { WithLocales } from '../../withs';

const defaultLocales = [];

export function UnlockForm({
    children,
    className,
    locales = defaultLocales,
    onForgotPasswordClick,
    onRegisterClick,
    rememberMe = false,
    ...props
}: UnlockFormProps) {
    const { t } = useTranslation();
    const { Form, field, tf, color } = useForm(props, 'unlock');

    return (
        <Form customChildren={children} className={className}>
            <Div mb={'lg'}>
                <Div mb={'sm'} className={'text-sm'}>
                    <Div full mb={'xmd'} py={'sm'} className={'leading-tight focus:outline-none focus:shadow-outline'}>
                        <PasswordField {...field} appendIcon={'fa-far--plus-square'} autoFocus required />
                    </Div>
                    <Div center flex m={'md'} spacebetween>
                        {rememberMe && <RememberPasswordField {...field} />}
                        <Clickable onClick={onForgotPasswordClick as any} optional>
                            <Text color={color} text={tf('password_label')} variant={'body'} />
                        </Clickable>
                    </Div>
                    <Button color={color} variant={'contained'} className={'w-full items-center justify-center'}>
                        {t('form_unlock_password_send_otp_submit_label')}
                    </Button>
                </Div>
            </Div>
            <LocaleChange locales={locales} />
        </Form>
    );
}
export interface UnlockFormProps extends BaseFormProps, WithLocales {
    onRegisterClick?: Function;
    onForgotPasswordClick?: target;
    rememberMe?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default UnlockForm;
