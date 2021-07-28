import AppLayoutTemplate, {
    AppLayoutTemplateProps,
} from '@genstackio/react-admin-ui/lib/templates/layouts/AppLayoutTemplate';
import { useUser } from '@genstackio/react-contexts';
import AppToolbar, {AppToolbarProps} from '../AppToolbar';
import { menu_button_item, flag } from '@genstackio/react-admin-ui/lib/types';

export function AppLayout({
    userMenu,
    toolbarProps,
}: AppLayoutProps) {
    const [user, , logout] = useUser();

    return (
        <AppLayoutTemplate
            toolbar={<AppToolbar user={user} onLogout={logout} userMenu={userMenu} {...toolbarProps} />}
            {...props}
        />
    );
}

export interface AppLayoutProps extends AppLayoutTemplateProps {
    userMenu?: menu_button_item[];
    toolbarProps?: AppToolbarProps;
}

export default AppLayout;
