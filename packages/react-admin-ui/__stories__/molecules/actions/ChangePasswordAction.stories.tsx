import { args, s, a } from '../../utils';
import { ChangePasswordAction } from '../../../src';

export default {
    title: 'Molecules/actions/ChangePasswordAction',
    component: ChangePasswordAction,
    argTypes: a({
        color: args.color,
        defaultValues: args._disabled,
        variant: args._disabled,
        socialChangePasswords: args.flag,
    }),
};

export const basic = s(ChangePasswordAction, {});
