import { args, s, a } from '../../utils';
import { UsernameField } from '../../../src';

export default {
    title: 'Atoms/fields/UsernameField',
    component: UsernameField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaults: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args.fieldValue,
        kind: args._disabled,
    }),
};

const Template = (args) => <UsernameField {...args} />;

export const basic = s(Template, {});
