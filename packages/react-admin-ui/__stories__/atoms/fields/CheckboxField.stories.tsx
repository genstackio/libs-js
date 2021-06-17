import {args, s} from "../../utils";
import {CheckboxField} from '../../../src';

export default {
    title: 'Atoms/fields/CheckboxField',
    component: CheckboxField,
    argTypes: {
        disabled: args.disabled,
        name: args.name,
        label: args.label,
        onChange: args._disable,
        defaultValue: args._disable,
        errors: args._disable,
        register: args._disable,
        options: args._disable,
    },
}

const Template = args => <CheckboxField {...args} />;

export const basic = s(Template, {
    label: 'Checkbox',
    name: 'checkbox',
})