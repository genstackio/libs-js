import {args, s} from "../../utils";
import {TextField} from '../../../src';

export default {
    title: 'Atoms/fields/TextField',
    component: TextField,
    argTypes: {
        disabled: args.disabled,
        error: args.error,
        errorText: args.errorText,
        label: args.label,
        placeHolder: args.placeHolder,
    },
}

const Template = args => <TextField {...args} />;

export const basic = s(Template, {
    error: false,
    errorText: "Invalid name field !",
    label: "name",
    placeHolder: "Name",
})