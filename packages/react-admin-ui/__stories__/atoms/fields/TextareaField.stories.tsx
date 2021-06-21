import {args, s, a} from "../../utils";
import {TextareaField} from '../../../src';

export default {
    title: 'Atoms/fields/TextareaField',
    component: TextareaField,
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
        rows: args.rows,
    }),
}

const Template = args => <TextareaField {...args} />;

export const basic = s(Template, {})
