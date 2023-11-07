import { useForm } from 'react-hook-form';
import { args, s, a } from '../../utils';
import { UserImageUploadField } from '../../../src/atoms/fields/UserImageUploadField';

export default {
    title: 'Atoms/fields/UserImageUploadField',
    component: UserImageUploadField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaultValues: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args.fieldValue,
        kind: args._disabled,
    }),
};

const Template = (args) => {
    const defaultValues = {};
    const { control, handleSubmit, register } = useForm({ defaultValues });
    const getUploadParams = ({ file, meta }) => {
        const body = new FormData();
        body.append('fileField', file);
        return { url: 'https://httpbin.org/post', body };
    };
    const onSubmit = () => {
        /* empty */
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <UserImageUploadField
                getUploadParams={getUploadParams}
                control={control}
                {...(register as any)('image')}
                {...args}
            />
        </form>
    );
};
export const basic = s(Template, { rounded: true });
