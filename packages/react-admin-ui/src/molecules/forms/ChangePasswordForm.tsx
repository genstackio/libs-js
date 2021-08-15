import NewPasswordField from '../../atoms/fields/NewPasswordField';
import CurrentPasswordField from '../../atoms/fields/CurrentPasswordField';
import NewPasswordConfirmationField from '../../atoms/fields/NewPasswordConfirmationField';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';

export function ChangePasswordForm(props: ChangePasswordFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'change_password');

    return (
        <Form {...props}>
            <CurrentPasswordField {...field} />
            <NewPasswordField {...field} />
            <NewPasswordConfirmationField {...field} />
            <SubmitButton />
        </Form>
    );
}

export type ChangePasswordFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default ChangePasswordForm;
