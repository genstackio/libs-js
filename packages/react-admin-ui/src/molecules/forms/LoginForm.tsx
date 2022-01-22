import Clickable from '../../atoms/Clickable';
import LocaleChange from '../../atoms/LocaleChange';
import UsernameField from '../../atoms/fields/UsernameField';
import PasswordField from '../../atoms/fields/PasswordField';
import RememberPasswordField from '../../atoms/fields/RememberPasswordField';
import Button from '../../atoms/Button';
import Div from '../../atoms/Div';
import Text from '../../atoms/Text';
import { useCallback } from 'react';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';
import { flag, target } from '../../types';
import { WithLocales } from '../../withs';

const defaultLocales = [];

export function LoginForm({
    children,
    className,
    locales = defaultLocales,
    onForgotPasswordClick,
    onRegisterClick,
    rememberMe = false,
    socialLogins = false,
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
            <Text text={tf('register_question')} variant={'body'} className={'mr-2'} />
            <Clickable onClick={onRegisterClick as any}>
                <Text color={color} text={tf('register_label')} variant={'body'} />
            </Clickable>
        </>
    );

    return (
        <Form customChildren={children} footer={footer} className={className}>
            <UsernameField {...field} autoFocus required />
            <Div mb={'lg'}>
                <Div mb={'sm'} className={'text-sm'}>
                    <Div mb={'xmd'} py={'sm'} className={'leading-tight focus:outline-none focus:shadow-outline'}>
                        <PasswordField {...field} required />
                    </Div>
                    {(rememberMe || onForgotPasswordClick) && (
                        <Div center flex mb={'md'} spacebetween>
                            {rememberMe && <RememberPasswordField {...field} />}
                            <Clickable onClick={onForgotPasswordClick as any} optional>
                                <Text color={color} text={tf('forgot_password_label')} variant={'body'} />
                            </Clickable>
                        </Div>
                    )}
                    <SubmitButton />
                </Div>
            </Div>
            {socialLogins && (
                <>
                    <Div flex mt={'md'} relative>
                        <Text color={color} text={tf('other_login_methods_title')} variant={'description'} />
                        <hr className={'flex-1 mt-2 ml-2'} />
                    </Div>
                    <Div center flex inline mt={'md'} spaced={2}>
                        <Button color={color} label={'Linkedin'} onClick={onLinkedInClick} variant={'outlined'} />
                        <Button color={color} label={'Twitter'} onClick={onTwitterClick} variant={'outlined'} />
                        <Button color={color} label={'Facebook'} onClick={onFacebookClick} variant={'outlined'} />
                    </Div>
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
