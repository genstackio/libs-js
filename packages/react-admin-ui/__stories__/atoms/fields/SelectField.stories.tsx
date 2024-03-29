import { args, s, a } from '../../utils';
import { SelectField } from '../../../src';
import { useForm } from 'react-hook-form';

export default {
    title: 'Atoms/fields/SelectField',
    component: SelectField,
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
        rows: args.rows,
        kind: args._disabled,
    }),
};

const Template = (args) => {
    const { control } = useForm();
    return <SelectField {...args} control={control} />;
};

export const basic = s(Template, {
    values: [
        { value: 1, label: 'First value' },
        {
            value: 2,
            label: (
                <p>
                    Second <b>value</b>
                </p>
            ),
        },
        { value: 3, label: 'Third value' },
    ],
});

export const withDefaultValue = s(Template, {
    defaultValue: 3,
    values: [
        { value: 1, label: 'First value' },
        {
            value: 2,
            label: (
                <p>
                    Second <b>value</b>
                </p>
            ),
        },
        { value: 3, label: 'Third value' },
    ],
});
