import { args, s, a } from '../../utils';
import { PasswordField } from '../../../src';

export default {
    title: 'Atoms/fields/PasswordField',
    component: PasswordField,
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

const Template = (args) => <PasswordField {...args} />;

export const basic = s(Template, {});
