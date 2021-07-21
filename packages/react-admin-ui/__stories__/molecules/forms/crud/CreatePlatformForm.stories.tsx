import { args, s, a } from '../../../utils';
import { CreatePlatformForm } from '../../../../src';

export default {
    title: 'Molecules/forms/crud/CreatePlatformForm',
    component: CreatePlatformForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

const Template = (args) => <CreatePlatformForm {...args} />;

export const basic = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
});
