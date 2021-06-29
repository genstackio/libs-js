import { args, s, a } from '../../utils';
import { DateField } from '../../../src';

export default {
    title: 'Atoms/fields/DateField',
    component: DateField,
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

const Template = (args) => <DateField {...args} />;

export const basic = s(Template, {
    now: '2020-03-18T21:11:54',
});
