import NameField from '../../../atoms/fields/NameField';
import CodeField from '../../../atoms/fields/CodeField';
import { BaseFormProps } from '../BaseForm';
import useForm from '../../../hooks/useForm';

export function CreateTokenForm({ children, ...props }: CreateTokenFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_token');

    return (
        <Form customChildren={children}>
            <NameField {...field} autoFocus required />
            <CodeField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type CreateTokenFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default CreateTokenForm;
