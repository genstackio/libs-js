import {useContext, useMemo} from 'react';
import RegisterContext from '../contexts/RegisterContext';

export const useRegisterContext = ({actionProps: forcedActionProps = undefined, formProps: forcedFormProps = undefined, templateProps: forcedTemplateProps = undefined}: {actionProps?: any, formProps?: any, templateProps?: any}) => {
    const c = useContext(RegisterContext);
    const actionProps = useMemo(() => ({...(c.actionProps || {}), ...(forcedActionProps || {})}), [c.actionProps, forcedActionProps]);
    const formProps = useMemo(() => ({...(c.formProps || {}), ...(forcedFormProps || {})}), [c.formProps, forcedFormProps]);
    const templateProps = useMemo(() => ({...(c.templateProps || {}), ...(forcedTemplateProps || {})}), [c.templateProps, forcedTemplateProps]);

    return useMemo(() => ({...c, actionProps, formProps, templateProps}), [c, actionProps, formProps, templateProps]);
};

export default useRegisterContext;
