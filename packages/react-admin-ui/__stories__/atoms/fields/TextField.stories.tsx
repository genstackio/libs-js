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
        defaults: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args._disabled,
        kind: args._disabled,
        variant: args.fieldVariant,
    }),
};

const Template = (args) => <TextField {...args} />;

export const basic = s(Template, {});

export const withPrepend = s(
    (args) => (
        <div>
            <Template prepend={'@'} {...args} />
            <Template prepend={'hello'} {...args} />
            <Template prependIcon={'people'} {...args} />
        </div>
    ),
    {},
);

export const withAppend = s(Template, {
    append: 'units',
});

export const withPrependAndAppend = s(Template, {
    prepend: <p>Hello&nbsp;world</p>,
    append: <p>Bye&nbsp;bye</p>,
});

export const showcase = s(
    (props) => (
        <div>
            <Template {...props} />
            <Template {...props} errors={{ all: true }} />
            <Template {...props} placehoder={'field_generic_required_placeholder'} required />
            <Template {...props} placehoder={'field_generic_disabled_placeholder'} disabled />
        </div>
    ),
    {
        label: 'The field',
        placeholder: 'This is a custom placeholder',
    },
);
