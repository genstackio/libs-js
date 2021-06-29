import { args, s, a } from '../../utils';
import { SwitchField } from '../../../src';

export default {
    title: 'Atoms/fields/SwitchField',
    component: SwitchField,
    argTypes: a({
        label: args.label,
        disabled: args.disabled,
        required: args.required,
        helper: args.helper,
        name: args._disabled,
        register: args._disabled,
        errors: args._disabled,
        defaults: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        field: args._disabled,
        kind: args._disabled,
    }),
};

const Template = (args) => <SwitchField {...args} />;

export const basic = s(Template, {});
