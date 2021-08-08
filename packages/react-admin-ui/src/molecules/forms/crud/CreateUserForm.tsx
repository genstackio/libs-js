import useForm from '../../../hooks/useForm';
import EmailField from '../../../atoms/fields/EmailField';
import LastNameField from '../../../atoms/fields/LastNameField';
import FirstNameField from '../../../atoms/fields/FirstNameField';
import PasswordField from '../../../atoms/fields/PasswordField';
import TextField from '../../../atoms/fields/TextField';
import { BaseFormProps } from '../BaseForm';

export function CreateUserForm({ children, ...props }: CreateUserFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_user');

    return (
        <Form customChildren={children}>
            <EmailField {...field} required autoFocus />
            <LastNameField {...field} required />
            <FirstNameField {...field} required />
            <PasswordField {...field} required />
            <TextField name={'role'} {...field} value={'user'} required />
            <SubmitButton />
        </Form>
    );
}

export type CreateUserFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default CreateUserForm;
