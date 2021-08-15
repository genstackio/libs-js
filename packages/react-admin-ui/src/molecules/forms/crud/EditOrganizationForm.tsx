import NameField from '../../../atoms/fields/NameField';
import useForm from '../../../hooks/useForm';
import { BaseFormProps } from '../BaseForm';

export function EditOrganizationForm({ children, ...props }: EditOrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'edit_organization');

    return (
        <Form customChildren={children}>
            <NameField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type EditOrganizationFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default EditOrganizationForm;
