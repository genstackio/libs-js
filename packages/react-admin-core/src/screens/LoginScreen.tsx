import { useCallback } from 'react';
import LoginTemplate, { LoginTemplateProps } from '@genstackio/react-admin-ui/lib/templates/LoginTemplate';
import LoginAction from '@genstackio/react-admin-ui/lib/molecules/actions/LoginAction';
import { useLocales, useUserTokens } from '@genstackio/react-contexts';

export function LoginScreen(props: LoginScreenProps) {
    const { setCurrentUserTokens } = useUserTokens();
    const { locales } = useLocales();
    const onSuccess = useCallback(
        (data) => {
            setCurrentUserTokens(data?.data?.createAuthToken);
        },
        [setCurrentUserTokens],
    );
    const form = (
        <LoginAction onSuccess={onSuccess} locales={locales.map((x) => ({ value: x.id, language: x.label }))} />
    );

    return <LoginTemplate {...props} form={form} />;
}

export type LoginScreenProps = LoginTemplateProps;

export default LoginScreen;
