import {FirstNameField, LastNameField, UsernameField, PasswordField, PrivacyPolicyField, Text, Button} from "../../atoms";
import {useForm} from '../../hooks/useForm';
import {flag} from '../../types';
import {useCallback} from 'react';
import {BaseFormProps} from "./BaseForm";

export function RegisterForm({onPrivacyPolicyClick, onLoginClick, socialLogins, ...props}: RegisterFormProps) {
    const {Form, SubmitButton, field, tf, color} = useForm(props, 'register');

    const onFacebookClick = useCallback(event => {
        event.preventDefault();
    }, []);
    const onTwitterClick = useCallback(event => {
        event.preventDefault();
    }, []);
    const onLinkedInClick = useCallback(event => {
        event.preventDefault();
    }, []);

    const footer = onLoginClick && (
        <div className={'w-full flex flex-col justify-center'}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>
                <Text className={'text-gray-500 mr-2'} text={tf('login_question')} variant={'body'}/>
                <a href={'#'} onClick={onLoginClick as any}>
                    <Text text={tf('login_label')} color={color} variant={'body'} />
                </a>
            </div>
        </div>
    );

    return (
        <Form footer={footer}>
            <div className={'py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex inline xs:flex-col space-x-3 xs:space-x-0'}>
                <LastNameField {...field} threeOf5 autoFocus />
                <FirstNameField {...field} twoOf5 />
            </div>
            <div className={'block text-gray-700 text-sm font-bold mb-2 mt-4'}>
                <div className={'py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}>
                    <UsernameField {...field} required />
                </div>
                <div className={'w-full py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}>
                    <PasswordField {...field} required />
                </div>
                {onPrivacyPolicyClick && (
                    <div className={'mb-4 flex items-center justify-start'}>
                        <PrivacyPolicyField {...field} onClick={onPrivacyPolicyClick} className={'text-gray-500 mr-4'} />
                    </div>
                )}
                <SubmitButton />
            </div>
            {socialLogins && (
                <>
                    <div className={'flex mt-4 relative'}>
                        <Text className={'text-gray-500'} text={tf('other_login_methods_title')} variant={'description'} color={color} />
                        <hr className={'flex-1 mt-2 ml-2'} />
                    </div>
                    <div className={'mt-4 block flex flex-inline space-x-2 justify-center'}>
                        <Button onClick={onLinkedInClick} variant={'outlined'} color={color}>Linkedin</Button>
                        <Button onClick={onTwitterClick} variant={'outlined'} color={color}>Twitter</Button>
                        <Button onClick={onFacebookClick} variant={'outlined'} color={color}>Facebook</Button>
                    </div>
                </>
            )}
        </Form>
    );
}

export interface RegisterFormProps extends BaseFormProps {
    onLoginClick?: Function,
    onPrivacyPolicyClick?: Function,
    socialLogins?: flag,
}

export default RegisterForm
