import { args, s, a } from '../../utils';
import { RememberPasswordField } from '../../../src';

export default {
    title: 'Atoms/fields/RememberPasswordField',
    component: RememberPasswordField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disable,
        type: args.fieldType,
        errors: args._disable,
        defaults: args._disable,
        onChange: args._disable,
        options: args._disable,
        value: args.fieldValue,
        kind: args._disable,
    }),
};

const Template = (args) => <RememberPasswordField {...args} />;

export const basic = s(Template, {});
