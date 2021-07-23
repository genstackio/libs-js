import useForm from '../../../hooks/useForm';
import NameField from '../../../atoms/fields/NameField';
import { BaseFormProps } from '../BaseForm';
import CodeField from '../../../atoms/fields/CodeField';

export function CreateTokenForm(props: CreateTokenFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_token');

    return (
        <Form>
            <NameField {...field} required autoFocus />
            <CodeField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type CreateTokenFormProps = BaseFormProps;

export default CreateTokenForm;
