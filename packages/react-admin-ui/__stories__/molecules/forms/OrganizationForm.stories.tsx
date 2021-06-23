import { args, s, a } from '../../utils';
import { OrganizationForm } from '../../../src';

export default {
    title: 'Molecules/forms/OrganizationForm',
    component: OrganizationForm,
    argTypes: a({
        color: args.color,
        defaultValues: args._disable,
        onSubmit: args._disable,
    }),
};

const Template = (args) => <OrganizationForm {...args} />;

export const basic = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
});
