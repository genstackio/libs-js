import { args, s, a } from '../../utils';
import { ChangePasswordAction } from '../../../src';

export default {
    title: 'Molecules/actions/ChangePasswordAction',
    component: ChangePasswordAction,
    argTypes: a({
        color: args.color,
        defaultValues: args._disable,
        variant: args._disable,
        socialChangePasswords: args.flag,
    }),
};

const Template = (args) => <ChangePasswordAction {...args} />;

export const basic = s(Template, {});
