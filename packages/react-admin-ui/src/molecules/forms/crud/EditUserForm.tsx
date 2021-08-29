import EmailField from '../../../atoms/fields/EmailField';
import LastNameField from '../../../atoms/fields/LastNameField';
import FirstNameField from '../../../atoms/fields/FirstNameField';
import TextField from '../../../atoms/fields/TextField';
import useForm from '../../../hooks/useForm';
import { BaseFormProps } from '../BaseForm';

export function EditUserForm({ children, ...props }: EditUserFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'edit_user');

    return (
        <Form customChildren={children}>
            <EmailField {...field} disabled required />
            <LastNameField {...field} autoFocus required />
            <FirstNameField {...field} required />
            <TextField name={'role'} {...field} disabled required />
            <SubmitButton />
        </Form>
    );
}

export type EditUserFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default EditUserForm;
