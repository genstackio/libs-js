import {args, s} from "../../utils";
import {LastNameField} from '../../../src';

export default {
    title: 'Atoms/fields/LastNameField',
    component: LastNameField,
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

const Template = args => <LastNameField {...args} />;

export const basic = s(Template, {})