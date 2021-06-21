import {args, s, a} from "../../utils";
import {OtpField} from '../../../src';

export default {
    title: 'Atoms/fields/OtpField',
    component: OtpField,
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

const Template = args => <OtpField {...args} />;

export const basic = s(Template, {})
