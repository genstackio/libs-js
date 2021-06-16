import {args, s} from "../../utils";
import {AddressField} from '../../../src';

export default {
    title: 'Atoms/fields/AddressField',
    component: AddressField,
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

const Template = args => <AddressField {...args} />;

export const basic = s(Template, {})