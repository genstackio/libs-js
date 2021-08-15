import { useTranslation } from 'react-i18next';
import Form from '../../atoms/Form';
import Text from '../../atoms/Text';
import Div from '../../atoms/Div';
import Column from '../../atoms/Column';
import Button from '../../atoms/Button';
import PasswordField from '../../atoms/fields/PasswordField';
import RememberPasswordField from '../../atoms/fields/RememberPasswordField';
import PasswordConfirmationField from '../../atoms/fields/PasswordConfirmationField';
import { flag } from '../../types';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithDefaultValues, WithOnSubmit } from '../../withs';

export function CreatePasswordForgotPasswordForm({
    className,
    color,
    confirm = false,
    defaultValues = {},
    onSubmit,
    rememberMe = false,
}: CreatePasswordForgotPasswordFormProps) {
    const { t } = useTranslation();

    return (
        <Column full className={className}>
            <Form defaultValues={defaultValues} onSubmit={onSubmit}>
                <Text color={color} text={t('form_forgot_password_create_password_title')} variant={'title6'} />
                <Text
                    color={color}
                    text={t('form_forgot_password_create_password_subtitle')}
                    variant={'body'}
                    className={'text-disabled mb-4'}
                />
                <PasswordField autoFocus field required />
                {confirm && <PasswordConfirmationField field required />}
                {rememberMe && <RememberPasswordField field />}
                <Div center flex mt={'lg'}>
                    <Button color={color} variant={'contained'} className={'w-full items-center justify-center'}>
                        {t('form_forgot_password_create_password_submit_label')}
                    </Button>
                </Div>
            </Form>
        </Column>
    );
}

export interface CreatePasswordForgotPasswordFormProps
    extends AsComponent,
        WithColorOfBox,
        WithDefaultValues,
        WithOnSubmit {
    confirm?: flag;
    rememberMe?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default CreatePasswordForgotPasswordForm;
