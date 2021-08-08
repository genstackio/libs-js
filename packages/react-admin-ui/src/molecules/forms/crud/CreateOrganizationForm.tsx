import useForm from '../../../hooks/useForm';
import NameField from '../../../atoms/fields/NameField';
import { BaseFormProps } from '../BaseForm';
import CodeField from '../../../atoms/fields/CodeField';

export function CreateOrganizationForm({ children, ...props }: CreateOrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_organization');

    return (
        <Form customChildren={children}>
            <NameField {...field} required autoFocus />
            <CodeField {...field} />
            <SubmitButton />
        </Form>
    );
}

export type CreateOrganizationFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default CreateOrganizationForm;
