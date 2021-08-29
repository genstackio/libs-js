import EmailField from '../../../atoms/fields/EmailField';
import LastNameField from '../../../atoms/fields/LastNameField';
import FirstNameField from '../../../atoms/fields/FirstNameField';
import { BaseFormProps } from '../BaseForm';
import useForm from '../../../hooks/useForm';

export function EditCurrentUserForm({ children, ...props }: EditCurrentUserFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'edit_current_user');

    return (
        <Form customChildren={children}>
            <EmailField {...field} autoFocus required />
            <LastNameField {...field} required />
            <FirstNameField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type EditCurrentUserFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default EditCurrentUserForm;
