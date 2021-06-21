import {args, s, a} from "../../utils";
import {UrlField} from '../../../src';

export default {
    title: 'Atoms/fields/UrlField',
    component: UrlField,
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

const Template = args => <UrlField {...args} />;

export const basic = s(Template, {})
