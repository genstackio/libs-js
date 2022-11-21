import {useContext, useMemo} from 'react';
import RegisterContext from '../contexts/RegisterContext';

export const useRegisterContext = ({layout: forcedLayout = undefined, formComponent: forcedFormComponent = undefined, templateComponent: forcedTemplateComponent = undefined, actionProps: forcedActionProps = undefined, formProps: forcedFormProps = undefined, templateProps: forcedTemplateProps = undefined}: {layout?: string, formComponent?: any, templateComponent?: any, actionProps?: any, formProps?: any, templateProps?: any}) => {
    const c = useContext(RegisterContext);
    const actionProps = useMemo(() => ({...(c.actionProps || {}), ...(forcedActionProps || {})}), [c.actionProps, forcedActionProps]);
    const formProps = useMemo(() => ({...(c.formProps || {}), ...(forcedFormProps || {})}), [c.formProps, forcedFormProps]);
    const templateProps = useMemo(() => ({...(c.templateProps || {}), ...(forcedTemplateProps || {})}), [c.templateProps, forcedTemplateProps]);

    return useMemo(() => ({...c, layout: forcedLayout || c.layout, templateComponent: forcedTemplateComponent || c.templateComponent, formComponent: forcedFormComponent || c.formComponent, actionProps, formProps, templateProps}), [c, actionProps, formProps, templateProps]);
};

// noinspection JSUnusedGlobalSymbols
export default useRegisterContext;
