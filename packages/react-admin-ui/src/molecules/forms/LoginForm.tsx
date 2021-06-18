import {UsernameField, PasswordField, RememberPasswordField, Button, Text} from "../../atoms";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {box_color} from '../../mappings/box-colors';
import {useCallback} from "react";
import {flag} from "../../types";

export function LoginForm({onSubmit, onRegisterClick, onForgotPasswordClick, color = 'primary', defaultValues = {}, socialLogins = false, rememberMe = false}: LoginFormProps) {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues});
    const field = {register, errors, defaultValues};
    const onFacebookClick = useCallback(event => {
        event.preventDefault();
    }, []);
    const onTwitterClick = useCallback(event => {
        event.preventDefault();
    }, []);
    const onLinkedInClick = useCallback(event => {
        event.preventDefault();
    }, []);
    return (
        <div className={'w-full flex flex-col'}>
            <div className="w-full flex justify-center">
                <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
                    <Text text={t('form_login_title')} variant={'title6'} color={color} />
                    <Text className={'text-gray-500 mb-4'} text={t('form_login_subtitle')} variant={'body'} color={color} />
                    <UsernameField {...field} required autoFocus />
                    <div className="mb-6">
                        <div className="block text-gray-700 text-sm mb-2">
                            <div className="w-full py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                                <PasswordField {...field} required />
                            </div>
                            {(rememberMe || onForgotPasswordClick) && (
                                <div className="mb-4 flex items-center justify-between">
                                    {rememberMe && (
                                        <div className={'text-red-500'}>
                                            <RememberPasswordField {...field} />
                                        </div>
                                    )}
                                    {onForgotPasswordClick && (
                                        <div onClick={onForgotPasswordClick as any}>
                                            <Text text={t('form_login_forgot_password_label')} color={color} variant={'body'}/>
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="flex justify-center">
                                <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>{t('form_login_submit_label')}</Button>
                            </div>
                        </div>
                    </div>
                    {socialLogins && (
                        <>
                            <div className={'flex mt-4 relative'}>
                                <Text className={'text-gray-500'} text={t('form_login_other_login_methods_title')} variant={'description'} color={color} />
                                <hr className={'flex-1 mt-2 ml-2'} />
                            </div>
                            <div className={'mt-4 block flex flex-inline space-x-2 justify-center'}>
                                <Button onClick={onLinkedInClick} variant={'outlined'} color={color}>Linkedin</Button>
                                <Button onClick={onTwitterClick} variant={'outlined'} color={color}>Twitter</Button>
                                <Button onClick={onFacebookClick} variant={'outlined'} color={color}>Facebook</Button>
                            </div>
                        </>
                    )}
                </form>
            </div>
            {onRegisterClick && (
                <div className={'w-full flex flex-col justify-center'}>
                    <div className={'mt-4 flex flex-inline items-center justify-center'}>
                        <Text className={'text-gray-500 mr-2'} text={t('form_login_register_question')} variant={'body'}/>
                        <a href={'#'} onClick={onRegisterClick as any}>
                            <Text text={t('form_login_register_label')} color={color} variant={'body'} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
export interface LoginFormProps {
    onSubmit?: Function,
    onRegisterClick?: Function,
    onForgotPasswordClick?: Function,
    defaultValues?: any,
    color?: box_color,
    socialLogins?: flag,
    rememberMe?: flag,
}

export default LoginForm