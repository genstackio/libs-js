import { UsernameField, PasswordField, RememberPasswordField, Button, Text } from '../../atoms';
import { useCallback } from 'react';
import { flag } from '../../types';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';

export function LoginForm({
    onRegisterClick,
    onForgotPasswordClick,
    socialLogins = false,
    rememberMe = false,
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
            <Text className={'text-gray-500 mr-2'} text={tf('register_question')} variant={'body'} />
            <a href={'#'} onClick={onRegisterClick as any}>
                <Text text={tf('register_label')} color={color} variant={'body'} />
            </a>
        </>
    );

    return (
        <Form footer={footer}>
            <UsernameField {...field} required autoFocus />
            <div className={'mb-6'}>
                <div className={'block text-gray-700 text-sm mb-2'}>
                    <div
                        className={
                            'w-full py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        }
                    >
                        <PasswordField {...field} required />
                    </div>
                    {(rememberMe || onForgotPasswordClick) && (
                        <div className={'mb-4 flex items-center justify-between'}>
                            {rememberMe && (
                                <div className={'text-red-500'}>
                                    <RememberPasswordField {...field} />
                                </div>
                            )}
                            {onForgotPasswordClick && (
                                <div onClick={onForgotPasswordClick as any}>
                                    <Text text={tf('forgot_password_label')} color={color} variant={'body'} />
                                </div>
                            )}
                        </div>
                    )}
                    <SubmitButton />
                </div>
            </div>
            {socialLogins && (
                <>
                    <div className={'flex mt-4 relative'}>
                        <Text
                            className={'text-gray-500'}
                            text={tf('other_login_methods_title')}
                            variant={'description'}
                            color={color}
                        />
                        <hr className={'flex-1 mt-2 ml-2'} />
                    </div>
                    <div className={'mt-4 block flex flex-inline space-x-2 justify-center'}>
                        <Button onClick={onLinkedInClick} variant={'outlined'} color={color}>
                            Linkedin
                        </Button>
                        <Button onClick={onTwitterClick} variant={'outlined'} color={color}>
                            Twitter
                        </Button>
                        <Button onClick={onFacebookClick} variant={'outlined'} color={color}>
                            Facebook
                        </Button>
                    </div>
                </>
            )}
        </Form>
    );
}
export interface LoginFormProps extends BaseFormProps {
    onRegisterClick?: Function;
    onForgotPasswordClick?: Function;
    socialLogins?: flag;
    rememberMe?: flag;
}

export default LoginForm;
