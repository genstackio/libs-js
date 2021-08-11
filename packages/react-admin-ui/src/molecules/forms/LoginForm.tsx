import Clickable from '../../atoms/Clickable';
import LocaleChange from '../../atoms/LocaleChange';
import UsernameField from '../../atoms/fields/UsernameField';
import PasswordField from '../../atoms/fields/PasswordField';
import RememberPasswordField from '../../atoms/fields/RememberPasswordField';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import { useCallback } from 'react';
import { flag, target } from '../../types';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';
import { WithLocales } from '../../withs';

export function LoginForm({
    children,
    className,
    onRegisterClick,
    onForgotPasswordClick,
    socialLogins = false,
    rememberMe = false,
    locales = [],
    ...props
}: LoginFormProps) {
    const { Form, SubmitButton, field, tf, color } = useForm(props, 'login');

    const onFacebookClick = useCallback((event) => {
        event.preventDefault();
    }, []);
    const onTwitterClick = useCallback((event) => {
        event.preventDefault();
    }, []);
    const onLinkedInClick = useCallback((event) => {
        event.preventDefault();
    }, []);

    const footer = onRegisterClick && (
        <>
            <Text className={'mr-2'} text={tf('register_question')} variant={'body'} />
            <Clickable onClick={onRegisterClick as any}>
                <Text text={tf('register_label')} color={color} variant={'body'} />
            </Clickable>
        </>
    );

    return (
        <Form customChildren={children} footer={footer} className={className}>
            <UsernameField {...field} required autoFocus />
            <div className={'mb-6'}>
                <div className={'block text-sm mb-2'}>
                    <div className={'w-full py-2 mb-3 leading-tight focus:outline-none focus:shadow-outline'}>
                        <PasswordField {...field} required />
                    </div>
                    {(rememberMe || onForgotPasswordClick) && (
                        <div className={'mb-4 flex items-center justify-between'}>
                            {rememberMe && <RememberPasswordField {...field} />}
                            <Clickable onClick={onForgotPasswordClick as any} optional>
                                <Text text={tf('forgot_password_label')} color={color} variant={'body'} />
                            </Clickable>
                        </div>
                    )}
                    <SubmitButton />
                </div>
            </div>
            {socialLogins && (
                <>
                    <div className={'flex mt-4 relative'}>
                        <Text text={tf('other_login_methods_title')} variant={'description'} color={color} />
                        <hr className={'flex-1 mt-2 ml-2'} />
                    </div>
                    <div className={'mt-4 block flex flex-inline space-x-2 justify-center'}>
                        <Button onClick={onLinkedInClick} variant={'outlined'} color={color} label={'Linkedin'} />
                        <Button onClick={onTwitterClick} variant={'outlined'} color={color} label={'Twitter'} />
                        <Button onClick={onFacebookClick} variant={'outlined'} color={color} label={'Facebook'} />
                    </div>
                </>
            )}
            <LocaleChange locales={locales} />
        </Form>
    );
}

export interface LoginFormProps extends BaseFormProps, WithLocales {
    onRegisterClick?: Function;
    onForgotPasswordClick?: target;
    socialLogins?: flag;
    rememberMe?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default LoginForm;
