import { useMemo } from 'react';
import { BaseFormProps } from '@genstackio/react-admin-ui/lib/molecules/forms/BaseForm';
import useForm from '@genstackio/react-admin-ui/lib/hooks/useForm';
import Contents from '@genstackio/react-admin-ui/lib/molecules/Contents';

export function EditForm({ name, edit: { content = [] } = {}, children, ...props }: EditFormProps) {
    const { Form, SubmitButton, field } = useForm(props, `edit_${name}`);

    const options = useMemo(() => ({ field, SubmitButton }), [field, SubmitButton]);

    return (
        <Form customChildren={children} className={'w-full'}>
            <Contents content={content} options={options} />
        </Form>
    );
}

export interface EditFormProps extends BaseFormProps {
    name: string;
    edit?: {
        content?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default EditForm;
