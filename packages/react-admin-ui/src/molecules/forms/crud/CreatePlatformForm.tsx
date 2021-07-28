import useForm from '../../../hooks/useForm';
import NameField from '../../../atoms/fields/NameField';
import { BaseFormProps } from '../BaseForm';

export function CreatePlatformForm({ children, ...props }: CreatePlatformFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_platform');

    return (
        <Form customChildren={children}>
            <NameField {...field} required autoFocus />
            <SubmitButton />
        </Form>
    );
}

export type CreatePlatformFormProps = BaseFormProps;

export default CreatePlatformForm;
