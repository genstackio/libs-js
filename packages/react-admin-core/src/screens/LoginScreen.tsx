import { useCallback } from 'react';
import { LoginTemplate, LoginAction, LocaleChange } from '@genstackio/react-admin-ui';
import { useLocales, useUserTokens } from '@genstackio/react-contexts';

export function LoginScreen() {
    const { setCurrentUserTokens } = useUserTokens();
    const { locales } = useLocales();
    const onSuccess = useCallback(
        (data) => {
            setCurrentUserTokens(data?.data?.createAuthToken);
        },
        [setCurrentUserTokens],
    );
    const form = (
        <>
            <LoginAction onSuccess={onSuccess} />
            <LocaleChange locales={locales.map((x) => ({ value: x.id, language: x.label }))} />
        </>
    );
    return <LoginTemplate form={form} />;
}

export default LoginScreen;
