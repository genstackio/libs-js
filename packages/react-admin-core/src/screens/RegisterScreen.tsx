import {useCallback, useMemo} from 'react';
import { RegisterTemplateProps } from '@genstackio/react-admin-ui/lib/templates/RegisterTemplate';
import {useLocales, useUserTokens} from '@genstackio/react-contexts';
import Loadable from "@loadable/component";
import RegisterAction from "@genstackio/react-admin-ui/lib/molecules/actions/RegisterAction";
import useRegisterContext from "@genstackio/react-contexts/lib/hooks/useRegisterContext";

const RegisterTemplate = Loadable(() => import('@genstackio/react-admin-ui/lib/templates/RegisterTemplate'));

const defaultActionProps = {};
const defaultFormProps = {};

const defaultRegisterResponseMapper = (response: any) => response?.data?.register;
const defaultRegisterPropagator = (data: any, {setCurrentUserTokens}: {setCurrentUserTokens: Function}) => {
    setCurrentUserTokens(data);
};

const layouts = {
    default: RegisterTemplate,
    centered: RegisterTemplate,
    none: ({form}) => <>{form || false}</>,
};

const defaultTemplate = layouts.default;

export function RegisterScreen({ onSuccess: forcedOnSuccess = undefined, actionProps: forcedActionProps = defaultActionProps, formProps: forcedFormProps = defaultFormProps, layout: forcedLayout, templateComponent: forcedTemplateComponent, formComponent: forcedFormComponent, ...props }: RegisterScreenProps) {
    const { setCurrentUserTokens } = useUserTokens();
    const { locales } = useLocales();
    const {
        actionProps, formProps, templateProps,
        actionComponent: ActionComp = RegisterAction,
        formComponent = undefined,
        templateComponent = undefined,
        layout = undefined,
        map = undefined,
        propagate = undefined,
        succeed = undefined,
    } = useRegisterContext({layout: forcedLayout, templateComponent: forcedTemplateComponent, formComponent: forcedFormComponent, actionProps: forcedActionProps, formProps: forcedFormProps});

    const onRegisterSuccess = useCallback((data: any) => {
        (propagate || defaultRegisterPropagator)(data, {setCurrentUserTokens});
    }, [propagate, map, setCurrentUserTokens]);

    const onSuccess = useCallback(
        (data) => {
            data = (map || defaultRegisterResponseMapper)(data);
            if (succeed) succeed(data, {setCurrentUserTokens, onRegisterSuccess});
            else  onRegisterSuccess(data);
            forcedOnSuccess && forcedOnSuccess(data);
        },
        [succeed, setCurrentUserTokens, map, onRegisterSuccess, forcedOnSuccess],
    );

    const form = (
        <ActionComp
            {...(formComponent ? {component: formComponent} : {})}
            {...(formProps || {})}
            onSuccess={onSuccess}
            locales={locales.map((x) => ({ value: x.id, language: x.label }))}
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

export interface RegisterScreenProps extends RegisterTemplateProps {
    formProps?: any;
    actionProps?: any;
    formComponent?: any;
    templateComponent?: any;
    layout?: string;
    onSuccess?: Function;
}

export default RegisterScreen;
