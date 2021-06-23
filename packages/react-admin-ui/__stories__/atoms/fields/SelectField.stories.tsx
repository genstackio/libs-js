import { args, s, a } from '../../utils';
import { SelectField } from '../../../src';

export default {
    title: 'Atoms/fields/SelectField',
    component: SelectField,
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
        kind: args._disable,
    }),
};

const Template = (args) => <SelectField {...args} />;

export const basic = s(Template, {
    values: [
        { value: 1, label: 'First value' },
        {
            value: 2,
            label: (
                <p>
                    Second <b>value</b>
                </p>
            ),
        },
        { value: 3, label: 'Third value' },
    ],
});
