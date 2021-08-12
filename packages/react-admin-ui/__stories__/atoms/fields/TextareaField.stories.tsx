import { args, s, a } from '../../utils';
import { TextareaField } from '../../../src';

export default {
    title: 'Atoms/fields/TextareaField',
    component: TextareaField,
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

export const basic = s(TextareaField, {});
