import { args, s, a } from '../../utils';
import { TextField } from '../../../src';

export default {
    title: 'Atoms/fields/TextField',
    component: TextField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaultValues: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args._disabled,
        kind: args._disabled,
        variant: args.fieldVariant,
    }),
};

export const basic = s(TextField, {});

export const withPrepend = s(
    (args) => (
        <div>
            <TextField prepend={'@'} {...args} />
            <TextField prepend={'hello'} {...args} />
            <TextField prependIcon={'people'} {...args} />
        </div>
    ),
    {},
);

export const withAppend = s(TextField, {
    append: 'units',
});

export const withPrependAndAppend = s(TextField, {
    prepend: <p>Hello&nbsp;world</p>,
    append: <p>Bye&nbsp;bye</p>,
});

export const showcase = s(
    (props) => (
        <div>
            <TextField {...props} />
            <TextField {...props} errors={{ all: true }} />
            <TextField {...props} placehoder={'field_generic_required_placeholder'} required />
            <TextField {...props} placehoder={'field_generic_disabled_placeholder'} disabled />
        </div>
    ),
    {
        label: 'The field',
        placeholder: 'This is a custom placeholder',
    },
);
