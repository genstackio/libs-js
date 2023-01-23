import { useMemo } from 'react';
import { BaseFormProps } from '@genstackio/react-admin-ui/lib/molecules/forms/BaseForm';
import useForm from '@genstackio/react-admin-ui/lib/hooks/useForm';
import Contents from '@genstackio/react-admin-ui/lib/molecules/Contents';

export function CreateForm({ name, children, new: { content = [] } = {}, ...props }: CreateFormProps) {
    const { Form, SubmitButton, field } = useForm(props, `create_${name}`);

    const options = useMemo(() => ({ field, SubmitButton }), [field, SubmitButton]);

    return (
        <Form customChildren={children} className={'w-full'}>
            <Contents content={content} options={options} />
        </Form>
    );
}

export interface CreateFormProps extends BaseFormProps {
    name: string;
    new?: {
        content?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default CreateForm;
