import {args, s, a} from "../../utils";
import {SwitchField} from '../../../src';

export default {
    title: 'Atoms/fields/SwitchField',
    component: SwitchField,
    argTypes: a({
        label: args.label,
        disabled: args.disabled,
        required: args.required,
        helper: args.helper,
        name: args._disable,
        register: args._disable,
        errors: args._disable,
        defaults: args._disable,
        onChange: args._disable,
        options: args._disable,
        field: args._disable,
    }),
}

const Template = args => <SwitchField {...args} />;

export const basic = s(Template, {})
