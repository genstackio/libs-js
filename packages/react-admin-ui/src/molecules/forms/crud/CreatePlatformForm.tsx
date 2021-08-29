import NameField from '../../../atoms/fields/NameField';
import { BaseFormProps } from '../BaseForm';
import useForm from '../../../hooks/useForm';

export function CreatePlatformForm({ children, ...props }: CreatePlatformFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_platform');

    return (
        <Form customChildren={children}>
            <NameField {...field} autoFocus required />
            <SubmitButton />
        </Form>
    );
}

export type CreatePlatformFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default CreatePlatformForm;
