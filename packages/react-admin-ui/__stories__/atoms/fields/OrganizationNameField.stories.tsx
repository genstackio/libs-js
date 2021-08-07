import { args, s, a } from '../../utils';
import { OrganizationNameField } from '../../../src';

export default {
    title: 'Atoms/fields/OrganizationNameField',
    component: OrganizationNameField,
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
        value: args.fieldValue,
        kind: args._disabled,
    }),
};

const Template = (args) => <OrganizationNameField {...args} />;

export const basic = s(Template, {});
