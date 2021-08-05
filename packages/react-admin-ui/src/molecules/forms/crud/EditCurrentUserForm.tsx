import useForm from '../../../hooks/useForm';
import EmailField from '../../../atoms/fields/EmailField';
import LastNameField from '../../../atoms/fields/LastNameField';
import FirstNameField from '../../../atoms/fields/FirstNameField';
import { BaseFormProps } from '../BaseForm';

export function EditCurrentUserForm({ children, ...props }: EditCurrentUserFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'edit_current_user');

    return (
        <Form customChildren={children}>
            <EmailField {...field} required autoFocus />
            <LastNameField {...field} required />
            <FirstNameField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type EditCurrentUserFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default EditCurrentUserForm;
