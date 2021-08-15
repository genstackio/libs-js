import NameField from '../../../atoms/fields/NameField';
import CodeField from '../../../atoms/fields/CodeField';
import { BaseFormProps } from '../BaseForm';
import useForm from '../../../hooks/useForm';

export function CreateOrganizationForm({ children, ...props }: CreateOrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_organization');

    return (
        <Form customChildren={children}>
            <NameField {...field} autoFocus required />
            <CodeField {...field} />
            <SubmitButton />
        </Form>
    );
}

export type CreateOrganizationFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default CreateOrganizationForm;
