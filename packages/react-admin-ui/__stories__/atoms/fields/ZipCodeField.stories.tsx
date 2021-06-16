import {args, s} from "../../utils";
import {ZipCodeField} from '../../../src';

export default {
    title: 'Atoms/fields/ZipCodeField',
    component: ZipCodeField,
    argTypes: {
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
    },
}

const Template = args => <ZipCodeField {...args} />;

export const basic = s(Template, {})