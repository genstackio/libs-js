import { a, args, s } from '../../utils';
import { ColorField } from '../../../src';

export default {
    title: 'Atoms/fields/ColorField',
    component: ColorField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaults: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args.fieldValue,
        kind: args._disabled,
    }),
};

const Template = (args) => <ColorField {...args} />;

export const basic = s(Template, {});
