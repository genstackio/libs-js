import { useCallback, useMemo } from 'react';
import { LoginTemplateProps } from '@genstackio/react-admin-ui/lib/templates/LoginTemplate';
import LoginAction from '@genstackio/react-admin-ui/lib/molecules/actions/LoginAction';
import { useLocales, useLoginContext, useUserTokens } from '@genstackio/react-contexts';
import { target } from '@genstackio/react-admin-ui/lib/types';
import Loadable from '@loadable/component';

const LoginTemplate = Loadable(() => import('@genstackio/react-admin-ui/lib/templates/LoginTemplate'));
const Login2Template = Loadable(() => import('@genstackio/react-admin-ui/lib/templates/Login2Template'));

const defaultActionProps = {};
const defaultFormProps = {};

const defaultLoginResponseMapper = (response: any) => response?.data?.createAuthToken;
const defaultLoginPropagator = (data: any, { setCurrentUserTokens }: { setCurrentUserTokens: Function }) => {
    setCurrentUserTokens(data);
};

const layouts = {
    default: LoginTemplate,
    none: ({ form }) => <>{form || false}</>,
    centered: LoginTemplate,
    fullscreen: Login2Template,
};

const defaultTemplate = layouts.default;

export function LoginScreen({
    onSuccess: forcedOnSuccess = undefined,
    onForgotPasswordClick,
    actionProps: forcedActionProps = defaultActionProps,
    formProps: forcedFormProps = defaultFormProps,
    layout: forcedLayout,
    templateComponent: forcedTemplateComponent,
    formComponent: forcedFormComponent,
    ...props
}: LoginScreenProps) {
    const { setCurrentUserTokens } = useUserTokens();
    const { locales } = useLocales();
    const {
        actionProps,
        formProps,
        templateProps,
        actionComponent: ActionComp = LoginAction,
        formComponent = undefined,
        templateComponent = undefined,
        layout = undefined,
        map = undefined,
        propagate = undefined,
        succeed = undefined,
    } = useLoginContext({
        layout: forcedLayout,
        templateComponent: forcedTemplateComponent,
        formComponent: forcedFormComponent,
        actionProps: forcedActionProps,
        formProps: forcedFormProps,
    });

    const onLoginSuccess = useCallback(
        (data: any) => {
            (propagate || defaultLoginPropagator)(data, { setCurrentUserTokens });
        },
        [propagate, map, setCurrentUserTokens],
    );

    const onSuccess = useCallback(
        (data) => {
            data = (map || defaultLoginResponseMapper)(data);
            if (succeed) succeed(data, { setCurrentUserTokens, onLoginSuccess });
            else onLoginSuccess(data);
            forcedOnSuccess && forcedOnSuccess(data);
        },
        [forcedOnSuccess, succeed, setCurrentUserTokens, map, onLoginSuccess],
    );

    const form = (
        <ActionComp
            {...(formComponent ? { component: formComponent } : {})}
            {...(formProps || {})}
            onSuccess={onSuccess}
            locales={locales.map((x) => ({ value: x.id, language: x.label }))}
            onForgotPasswordClick={onForgotPasswordClick}
            {...(actionProps || {})}
        />
    );

    const TemplateComp = useMemo(() => {
        if (templateComponent) return templateComponent;
        const l = layouts[layout || 'default'] || layouts['default'];
        if (!l) return defaultTemplate;
        return l;
    }, [layouts, layout, templateComponent]);
    return <TemplateComp {...templateProps} {...props} form={form} />;
}

export interface LoginScreenProps extends LoginTemplateProps {
    onForgotPasswordClick?: target;
    formProps?: any;
    actionProps?: any;
    formComponent?: any;
    templateComponent?: any;
    layout?: string;
    onSuccess?: Function;
}

export default LoginScreen;
