import ErrorTemplate, { ErrorTemplateProps } from '@genstackio/react-admin-ui/lib/templates/ErrorTemplate';
import { useTranslation } from 'react-i18next';
import { rich_text } from '@genstackio/react-admin-ui/lib/types';

export function NotFoundScreen({ code = 404, message = undefined, ...props }: NotFoundScreenProps) {
    const { t } = useTranslation();

    return <ErrorTemplate color={'danger'} code={code} message={message || t('screen_notfound_message')} {...props} />;
}

export interface NotFoundScreenProps extends Omit<ErrorTemplateProps, 'code' | 'message'> {
    code?: number;
    message?: rich_text;
}
export default NotFoundScreen;
