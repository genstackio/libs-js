import { s, a, args } from '../../utils';
import { FileField } from '../../../src';
import { useForm } from 'react-hook-form';

export default {
    title: 'Atoms/fields/FileField',
    component: FileField,
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
    const { control } = useForm();
    const defaultValues = {image: {url: 'http://www.africau.edu/images/default/sample.pdf'}};
    return <FileField control={control} defaultValues={defaultValues} {...args} />;
};

export const basic = s(Template, {});
export const image = s(Template, {defaultValues: {image: {url: 'https://picsum.photos/200/300.jpg'}}});
export const pdf = s(Template, {defaultValues: {image: {url: 'http://www.africau.edu/images/default/sample.pdf'}}});
