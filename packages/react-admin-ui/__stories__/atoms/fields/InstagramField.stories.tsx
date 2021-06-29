import { args, s, a } from '../../utils';
import { InstagramField } from '../../../src';

export default {
    title: 'Atoms/fields/InstagramField',
    component: InstagramField,
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

const Template = (args) => <InstagramField {...args} />;

export const basic = s(Template, {});
