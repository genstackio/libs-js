import {args, s, a} from "../../utils";
import {FirstNameField} from '../../../src';

export default {
    title: 'Atoms/fields/FirstNameField',
    component: FirstNameField,
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

const Template = args => <FirstNameField {...args} />;

export const basic = s(Template, {})
