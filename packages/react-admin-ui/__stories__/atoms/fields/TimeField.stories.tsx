import {a, args, s} from "../../utils";
import {TimeField} from '../../../src';

export default {
    title: 'Atoms/fields/TimeField',
    component: TimeField,
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
}

const Template = args => <TimeField {...args} />;

export const basic = s(Template, {
  defaultValue: '11:54',
})
