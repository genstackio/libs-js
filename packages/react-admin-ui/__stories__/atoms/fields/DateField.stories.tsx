import {args, s, a} from "../../utils";
import {DateField, TextField} from '../../../src';

export default {
    title: 'Atoms/fields/DateField',
    component: DateField,
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

const Template = args => <DateField {...args} />;

export const basic = s(Template, {
    now: '2020-03-18T21:11:54',
})
