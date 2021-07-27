import useForm from '../../../hooks/useForm';
import EmailField from '../../../atoms/fields/EmailField';
import LastNameField from '../../../atoms/fields/LastNameField';
import FirstNameField from '../../../atoms/fields/FirstNameField';
import { BaseFormProps } from '../../../molecules/forms/BaseForm';

export function EditCurrentUserForm(props: EditCurrentUserFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'edit_current_user');

    return (
        <Form>
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
