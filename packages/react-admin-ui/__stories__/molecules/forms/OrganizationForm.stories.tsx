import { args, s, a } from '../../utils';
import { OrganizationForm } from '../../../src';

export default {
    title: 'Molecules/forms/OrganizationForm',
    component: OrganizationForm,
    argTypes: a({
        color: args.color,
        defaultValues: args._disabled,
        onSubmit: args._disabled,
    }),
};

export const basic = s(OrganizationForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
});
