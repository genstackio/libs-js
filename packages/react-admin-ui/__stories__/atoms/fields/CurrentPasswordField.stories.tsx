import { args, s, a } from '../../utils';
import { CurrentPasswordField } from '../../../src';

export default {
    title: 'Atoms/fields/CurrentPasswordField',
    component: CurrentPasswordField,
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

const Template = (args) => <CurrentPasswordField {...args} />;

export const basic = s(Template, {});
