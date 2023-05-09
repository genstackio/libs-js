import { args, s, a } from '../../utils';
import { SwitchField } from '../../../src';
import { useForm } from 'react-hook-form';

export default {
    title: 'Atoms/fields/SwitchField',
    component: SwitchField,
    argTypes: a({
        label: args.label,
        disabled: args.disabled,
        helper: args.helper,
        name: args._disabled,
        register: args._disabled,
        errors: args._disabled,
        defaultValues: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        field: args._disabled,
        kind: args._disabled,
    }),
};

const Template = (args) => {
    const { control } = useForm();
    const defaultValues = { checked: false };
    return <SwitchField control={control} defaultValues={defaultValues} {...args} />;
};

export const basic = s(Template, {});
