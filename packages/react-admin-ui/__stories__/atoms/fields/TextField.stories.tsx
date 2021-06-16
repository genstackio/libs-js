import {args, s} from "../../utils";
import {TextField} from '../../../src';

export default {
    title: 'Atoms/fields/TextField',
    component: TextField,
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

const Template = args => <TextField {...args} />;

export const basic = s(Template, {
})

export const showcase = s(props => (
    <div>
        <Template {...props} />
        <Template {...props} errors={{all: true}} />
        <Template {...props} placehoder={'field_generic_required_placeholder'} required />
        <Template {...props} placehoder={'field_generic_disabled_placeholder'} disabled />
    </div>
), {
    label: 'The field',
    placeholder: 'This is a custom placeholder',
})