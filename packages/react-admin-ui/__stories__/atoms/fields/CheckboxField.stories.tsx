import { args, s, a } from '../../utils';
import { CheckboxField } from '../../../src';

export default {
    title: 'Atoms/fields/CheckboxField',
    component: CheckboxField,
    argTypes: a({
        disabled: args.disabled,
        name: args.name,
        label: args.label,
        onChange: args._disabled,
        defaultValue: args._disabled,
        errors: args._disabled,
        register: args._disabled,
        options: args._disabled,
        kind: args._disabled,
    }),
};

export const basic = s(CheckboxField, {
    label: 'Checkbox',
    name: 'checkbox',
});
