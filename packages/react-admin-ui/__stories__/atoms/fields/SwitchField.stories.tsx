import { args, s, a } from '../../utils';
import { SwitchField } from '../../../src';

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

export const basic = s(SwitchField, {});
