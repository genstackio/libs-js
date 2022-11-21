import {useContext, useMemo} from 'react';
import LoginContext from '../contexts/LoginContext';

export const useLoginContext = ({actionProps: forcedActionProps = undefined, formProps: forcedFormProps = undefined, templateProps: forcedTemplateProps = undefined}: {actionProps?: any, formProps?: any, templateProps?: any}) => {
    const c = useContext(LoginContext);
    const actionProps = useMemo(() => ({...(c.actionProps || {}), ...(forcedActionProps || {})}), [c.actionProps, forcedActionProps]);
    const formProps = useMemo(() => ({...(c.formProps || {}), ...(forcedFormProps || {})}), [c.formProps, forcedFormProps]);
    const templateProps = useMemo(() => ({...(c.templateProps || {}), ...(forcedTemplateProps || {})}), [c.templateProps, forcedTemplateProps]);

    return useMemo(() => ({...c, actionProps, formProps, templateProps}), [c, actionProps, formProps, templateProps]);
};

export default useLoginContext;
