import {FirstNameField, LastNameField, UsernameField, PasswordField, PrivacyPolicyField, Text, Button, TextFieldProps} from "../../atoms";
import {useForm} from "react-hook-form";
import {box_color} from '../../mappings/box-colors';
import {useTranslation} from "react-i18next";
import {flag} from "../../types";
import {useCallback} from "react";

export function RegisterForm({onSubmit, onPrivacyPolicyClick, onLoginClick, color = 'primary', socialLogins, defaultValues = {}}: RegisterFormProps) {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues});
    const field = {register, defaultValues, errors};
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
                    <Text text={t('form_register_title')} variant={'title6'} color={color} />
                    <Text className={'text-gray-500'} text={t('form_register_subtitle')} variant={'body'} color={color} />
                    <div className="py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex inline xs:flex-col space-x-3 xs:space-x-0">
                        <LastNameField {...field} className={'w-3/5 xs:w-full'} autoFocus />
                        <FirstNameField {...field} className={'w-2/5 xs:w-full'} />
                    </div>
                    <div className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                        <div className="py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <UsernameField {...field} required />
                        </div>
                        <div className="w-full py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                            <PasswordField {...field} required />
                        </div>
                        {onPrivacyPolicyClick && (
                            <div className="mb-4 flex items-center justify-start">
                                <PrivacyPolicyField {...field} onClick={onPrivacyPolicyClick} className={'text-gray-500 mr-4'} />
                            </div>
                        )}
                        <div className="flex justify-center">
                            <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>{t('form_register_submit_label')}</Button>
                        </div>
                    </div>
                    {socialLogins && (
                        <>
                            <div className={'flex mt-4 relative'}>
                                <Text className={'text-gray-500'} text={t('form_register_other_login_methods_title')} variant={'description'} color={color} />
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
            {onLoginClick && (
                <div className={'w-full flex flex-col justify-center'}>
                    <div className={'mt-4 flex flex-inline items-center justify-center'}>
                        <Text className={'text-gray-500 mr-2'} text={t('form_register_login_question')} variant={'body'}/>
                        <a href={'#'} onClick={onLoginClick as any}>
                            <Text text={t('form_register_login_label')} color={color} variant={'body'} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
export interface RegisterFormProps extends TextFieldProps {
    onSubmit?: Function,
    onLoginClick?: Function,
    onPrivacyPolicyClick?: Function,
    socialLogins?: flag,
    defaultValues?: any,
    color?: box_color,
}

export default RegisterForm