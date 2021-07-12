import clsx from 'clsx';
import RememberPasswordField from '../../atoms/fields/RememberPasswordField';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';
import Text from '../../atoms/Text';
import PasswordField from '../../atoms/fields/PasswordField';
import PasswordConfirmationField from '../../atoms/fields/PasswordConfirmationField';
import { useTranslation } from 'react-i18next';
import { box_color } from '../../mappings/box-colors';
import { class_name, flag } from '../../types';

export function CreatePasswordForgotPasswordForm({
    className,
    onSubmit,
    confirm = false,
    rememberMe = false,
    color,
    defaultValues = {},
}: CreatePasswordForgotPasswordFormProps) {
    const { t } = useTranslation();

    return (
        <div className={clsx('w-full flex flex-col', className)}>
            <Form onSubmit={onSubmit} defaultValues={defaultValues}>
                <Text text={t('form_forgot_password_create_password_title')} variant={'title6'} color={color} />
                <Text
                    className={'text-disabled mb-4'}
                    text={t('form_forgot_password_create_password_subtitle')}
                    variant={'body'}
                    color={color}
                />
                <PasswordField field required autoFocus />
                {confirm && <PasswordConfirmationField field required />}
                {rememberMe && <RememberPasswordField field />}
                <div className={'flex justify-center mt-6'}>
                    <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>
                        {t('form_forgot_password_create_password_submit_label')}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export interface CreatePasswordForgotPasswordFormProps {
    className?: class_name;
    color?: box_color;
    defaultValues?: any;
    onSubmit?: Function;
    confirm?: flag;
    rememberMe?: flag;
}

export default CreatePasswordForgotPasswordForm;
