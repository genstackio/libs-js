import {args, s, a} from '../../utils';
import {UserProfileAction} from '../../../src';
import MockPanel from "../../MockPanel";

export default {
    title: 'Molecules/actions/UserProfileAction',
    component: UserProfileAction,
    argTypes: a({
        color: args.color,
        onRegisterClick: args._disable,
        onForgotPasswordClick: args._disable,
        defaultValues: args._disable,
        variant: args._disable,
    }),
}

const Template = args => (
    <>
        <UserProfileAction {...args} />
        <MockPanel />
    </>
);

export const basic = s(Template, {
})
