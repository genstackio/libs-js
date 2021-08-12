import { args, s, a } from '../../../utils';
import { CreateUserAction } from '../../../../src';

export default {
    title: 'Molecules/actions/crud/CreateUserAction',
    component: CreateUserAction,
    argTypes: a({
        color: args.color,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

export const basic = s(CreateUserAction, {});
