import { args, s, a } from '../../utils';
import { OrganizationNameField } from '../../../src';

export default {
    title: 'Atoms/fields/OrganizationNameField',
    component: OrganizationNameField,
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

const Template = (args) => <OrganizationNameField {...args} />;

export const basic = s(Template, {});
