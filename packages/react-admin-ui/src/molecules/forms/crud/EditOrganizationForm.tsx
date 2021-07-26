import useForm from '../../../hooks/useForm';
import NameField from '../../../atoms/fields/NameField';
import { BaseFormProps } from '../BaseForm';

export function EditOrganizationForm(props: EditOrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'edit_organization');

    return (
        <Form>
            <NameField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type EditOrganizationFormProps = BaseFormProps;

export default EditOrganizationForm;
