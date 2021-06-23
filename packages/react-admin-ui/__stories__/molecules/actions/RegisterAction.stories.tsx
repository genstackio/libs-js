import { args, s, a } from '../../utils';
import { RegisterAction } from '../../../src';
import MockPanel from '../../MockPanel';

export default {
    title: 'Molecules/actions/RegisterAction',
    component: RegisterAction,
    argTypes: a({
        color: args.color,
        onLoginClick: args._disable,
        onForgotPasswordClick: args._disable,
        defaultValues: args._disable,
        variant: args._disable,
        socialRegisters: args.flag,
    }),
};

const Template = (args) => (
    <>
        <RegisterAction {...args} />
        <MockPanel />
    </>
);

export const basic = s(Template, {
    onForgotPasswordClick: undefined,
    onLoginClick: undefined,
});
