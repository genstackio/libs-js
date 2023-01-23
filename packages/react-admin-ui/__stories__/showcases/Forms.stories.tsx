import { s, a } from '../utils';
import { Block, LoginForm, ForgotPasswordForm, RegisterForm, ShowcaseForm } from '../../src';
import { useCallback } from 'react';

export default {
    title: 'Showcases/Forms',
    component: () => null,
    argTypes: a({}),
};

const showcaseDefaultValues = {
    dateTime: 1669899681000,
    date: 1669899681000,
    flag: true,
};

export const basic = s(() => {
    const onShowcaseSubmit = useCallback((data) => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    const onLoginSubmit = useCallback((data) => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    const onRegisterSubmit = useCallback((data) => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    const onForgotPasswordSubmit = useCallback((data) => {
        alert(JSON.stringify(data, null, 4));
    }, []);
    return (
        <div className={'w-full space-y-2'}>
            <div className={'flex space-x-2'}>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <ShowcaseForm onSubmit={onShowcaseSubmit} defaultValues={showcaseDefaultValues} />
                </Block>
            </div>
            <div className={'flex space-x-2'}>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <LoginForm onSubmit={onLoginSubmit} />
                </Block>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <RegisterForm onSubmit={onRegisterSubmit} />
                </Block>
            </div>
            <div className={'flex space-x-2 mt-2'}>
                <Block className={'flex-1'} color={'primary'} variant={'outlined'}>
                    <ForgotPasswordForm onSubmit={onForgotPasswordSubmit} />
                </Block>
            </div>
        </div>
    );
}, {});
