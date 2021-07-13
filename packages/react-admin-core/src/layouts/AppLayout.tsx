import AppLayoutTemplate, {
    AppLayoutTemplateProps,
} from '@genstackio/react-admin-ui/lib/templates/layouts/AppLayoutTemplate';
import { useUser } from '@genstackio/react-contexts';
import AppToolbar from '../AppToolbar';

export function AppLayout(props: AppLayoutProps) {
    const [user, , logout] = useUser();

    return <AppLayoutTemplate toolbar={<AppToolbar user={user} onLogout={logout} />} {...props} />;
}

export type AppLayoutProps = AppLayoutTemplateProps;

export default AppLayout;
