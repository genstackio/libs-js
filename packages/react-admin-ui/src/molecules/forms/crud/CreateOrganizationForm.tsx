import useForm from '../../../hooks/useForm';
import NameField from '../../../atoms/fields/NameField';
import { BaseFormProps } from '../BaseForm';

export function CreateOrganizationForm(props: CreateOrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_organization');

    return (
        <Form>
            <NameField {...field} required autoFocus />
            <SubmitButton />
        </Form>
    );
}

export type CreateOrganizationFormProps = BaseFormProps;

export default CreateOrganizationForm;
