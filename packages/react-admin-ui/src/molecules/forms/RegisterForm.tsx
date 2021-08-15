import { useCallback } from 'react';
import Text from '../../atoms/Text';
import Row from '../../atoms/Row';
import Div from '../../atoms/Div';
import Column from '../../atoms/Column';
import Button from '../../atoms/Button';
import Clickable from '../../atoms/Clickable';
import UsernameField from '../../atoms/fields/UsernameField';
import PasswordField from '../../atoms/fields/PasswordField';
import LastNameField from '../../atoms/fields/LastNameField';
import FirstNameField from '../../atoms/fields/FirstNameField';
import PrivacyPolicyField from '../../atoms/fields/PrivacyPolicyField';
import useForm from '../../hooks/useForm';
import { BaseFormProps } from './BaseForm';
import { flag } from '../../types';

export function RegisterForm({
    children,
    onLoginClick,
    onPrivacyPolicyClick,
    socialLogins,
    ...props
}: RegisterFormProps) {
    const { Form, SubmitButton, field, tf, color } = useForm(props, 'register');
    const onFacebookClick = useCallback((event) => {
        event.preventDefault();
    }, []);
    const onTwitterClick = useCallback((event) => {
        event.preventDefault();
    }, []);
    const onLinkedInClick = useCallback((event) => {
        event.preventDefault();
    }, []);

    const footer = onLoginClick && (
        <Column center full>
            <Div center flex inline mt={'md'}>
                <Text text={tf('login_question')} variant={'body'} className={'mr-2'} />
                <Clickable onClick={onLoginClick as any}>
                    <Text color={color} text={tf('login_label')} variant={'body'} />
                </Clickable>
            </Div>
        </Column>
    );

    return (
        <Form customChildren={children} footer={footer}>
            <Row mb={'md'} py={'sm'} spaced={30} className={'leading-tight focus:outline-none focus:shadow-outline'}>
                <LastNameField {...field} autoFocus threeOf5 />
                <FirstNameField {...field} twoOf5 />
            </Row>
            <Div mb={'sm'} className={'text-sm font-bold'}>
                <Div py={'sm'} className={'leading-tight focus:outline-none focus:shadow-outline'}>
                    <UsernameField {...field} required />
                </Div>
                <Div full mb={'xmd'} py={'sm'} className={'leading-tight focus:outline-none focus:shadow-outline'}>
                    <PasswordField {...field} required />
                </Div>
                {onPrivacyPolicyClick && (
                    <Div center flex mb={'md'} className={'justify-start'}>
                        <PrivacyPolicyField {...field} onClick={onPrivacyPolicyClick} className={'mr-4'} />
                    </Div>
                )}
                <SubmitButton />
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
        </Form>
    );
}

export interface RegisterFormProps extends BaseFormProps {
    onLoginClick?: Function;
    onPrivacyPolicyClick?: Function;
    socialLogins?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default RegisterForm;
