import { args, s, a } from '../../../utils';
import { CreateOrganizationForm } from '../../../../src';

export default {
    title: 'Molecules/forms/crud/CreateOrganizationForm',
    component: CreateOrganizationForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

const Template = (args) => <CreateOrganizationForm {...args} />;

export const basic = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
});
