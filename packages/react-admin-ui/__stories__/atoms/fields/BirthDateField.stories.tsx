import { args, s, a } from '../../utils';
import { BirthDateField } from '../../../src';

export default {
    title: 'Atoms/fields/BirthDateField',
    component: BirthDateField,
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
};

const Template = (args) => <BirthDateField {...args} />;

export const basic = s(Template, {
    now: '2020-03-18T21:11:54',
});
