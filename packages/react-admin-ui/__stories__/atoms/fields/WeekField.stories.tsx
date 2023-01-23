import { a, args, s } from '../../utils';
import { WeekField } from '../../../src';

export default {
    title: 'Atoms/fields/WeekField',
    component: WeekField,
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

export const basic = s(WeekField, {
    defaultValues: {
        week: new Date().getTime(),
    },
});
