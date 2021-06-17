import {s} from "../utils";
import {Block, LoginForm, ForgotPasswordForm, RegisterForm} from '../../src';
import {useCallback} from "react";

export default {
    title: 'Showcases/Forms',
    component: () => null,
    argTypes: {
    },
}

export const basic = s(() => {
    const onLoginSubmit = useCallback(data => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    const onRegisterSubmit = useCallback(data => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    const onForgotPasswordSubmit = useCallback(data => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    return (
        <>
            <div className={'flex space-x-2'}>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <LoginForm onSubmit={onLoginSubmit}/>
                </Block>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <RegisterForm onSubmit={onRegisterSubmit}/>
                </Block>
            </div>
            <div className={'flex space-x-2 mt-2'}>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <ForgotPasswordForm onSubmit={onForgotPasswordSubmit}/>
                </Block>
            </div>
        </>
    );
}, {})