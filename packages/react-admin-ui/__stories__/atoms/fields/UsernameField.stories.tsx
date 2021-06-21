import {args, s, a} from "../../utils";
import {UsernameField} from '../../../src';

export default {
    title: 'Atoms/fields/UsernameField',
    component: UsernameField,
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
    }),
}

const Template = args => <UsernameField {...args} />;

export const basic = s(Template, {})
