import {args, s, a} from "../../utils";
import {IpAddressField} from '../../../src';

export default {
    title: 'Atoms/fields/IpAddressField',
    component: IpAddressField,
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

const Template = args => <IpAddressField {...args} />;

export const basic = s(Template, {})
