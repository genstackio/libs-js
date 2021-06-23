import { useForm } from '../../hooks/useForm';
import { BaseFormProps } from './BaseForm';
import CurrentPasswordField from '../../atoms/fields/CurrentPasswordField';
import NewPasswordField from '../../atoms/fields/NewPasswordField';
import NewPasswordConfirmationField from '../../atoms/fields/NewPasswordConfirmationField';

export function ChangePasswordForm(props: ChangePasswordFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'change_password');

    return (
        <Form>
            <CurrentPasswordField {...field} />
            <NewPasswordField {...field} />
            <NewPasswordConfirmationField {...field} />
            <SubmitButton />
        </Form>
    );
}

export type ChangePasswordFormProps = BaseFormProps;

export default ChangePasswordForm;
