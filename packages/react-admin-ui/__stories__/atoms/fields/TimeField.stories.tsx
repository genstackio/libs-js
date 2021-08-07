import { a, args, s } from '../../utils';
import { TimeField } from '../../../src';

export default {
    title: 'Atoms/fields/TimeField',
    component: TimeField,
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

const Template = (args) => <TimeField {...args} />;

export const basic = s(Template, {
    defaultValue: '11:54',
});
