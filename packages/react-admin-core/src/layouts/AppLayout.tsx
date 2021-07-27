import AppLayoutTemplate, {
    AppLayoutTemplateProps,
} from '@genstackio/react-admin-ui/lib/templates/layouts/AppLayoutTemplate';
import { useUser } from '@genstackio/react-contexts';
import AppToolbar from '../AppToolbar';
import { menu_button_item } from '@genstackio/react-admin-ui/lib/types';

export function AppLayout({ userMenu, ...props }: AppLayoutProps) {
    const [user, , logout] = useUser();

    return <AppLayoutTemplate toolbar={<AppToolbar user={user} onLogout={logout} userMenu={userMenu} />} {...props} />;
}

export interface AppLayoutProps extends AppLayoutTemplateProps {
    userMenu?: menu_button_item[];
}

export default AppLayout;
