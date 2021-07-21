import { args, s, a } from '../../../utils';
import { CreateTokenForm } from '../../../../src';

export default {
    title: 'Molecules/forms/crud/CreateTokenForm',
    component: CreateTokenForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

const Template = (args) => <CreateTokenForm {...args} />;

export const basic = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
});
