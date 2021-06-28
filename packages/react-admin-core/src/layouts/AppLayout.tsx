import { AppLayoutTemplate, AppLayoutTemplateProps } from '@genstackio/react-admin-ui';
import { useLocales, useUser } from '@genstackio/react-contexts';
import AppToolbar from '../AppToolbar';

export function AppLayout(props: AppLayoutProps) {
    const [user, , logout] = useUser();
    const { locales } = useLocales();

    return (
        <AppLayoutTemplate
            toolbar={
                <AppToolbar
                    locales={locales.map((x) => ({ value: x.id, language: x.label }))}
                    user={user}
                    onLogout={logout}
                />
            }
            {...props}
        />
    );
}

export type AppLayoutProps = AppLayoutTemplateProps;

export default AppLayout;
