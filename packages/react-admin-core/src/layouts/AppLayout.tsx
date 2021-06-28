import { AppLayoutTemplate, AppLayoutTemplateProps } from '@genstackio/react-admin-ui';
import { useUser } from '@genstackio/react-contexts';
import { useTranslation } from 'react-i18next';
import AppToolbar from "../AppToolbar";

export function AppLayout({ children, ...props }: AppLayoutProps) {
    const [user, , logout] = useUser();
    const { t } = useTranslation();

    return (
        <AppLayoutTemplate toolbar={<AppToolbar user={user} onLogout={logout} />} {...props}>
            {children}
            {user!.firstName} {user!.lastName} ({user!.id}) -{' '}
            <button onClick={logout}>{t('button_logout_label')}</button>
        </AppLayoutTemplate>
    );
}

export type AppLayoutProps = AppLayoutTemplateProps;

export default AppLayout;
