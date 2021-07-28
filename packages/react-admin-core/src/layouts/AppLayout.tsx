import AppLayoutTemplate, {
    AppLayoutTemplateProps,
} from '@genstackio/react-admin-ui/lib/templates/layouts/AppLayoutTemplate';
import { useUser } from '@genstackio/react-contexts';
import AppToolbar from '../AppToolbar';
import { menu_button_item, flag } from '@genstackio/react-admin-ui/lib/types';

export function AppLayout({
    userMenu,
    fullScreenEnabled = false,
    messagesEnabled = false,
    shoppingCartEnabled = false,
    darkModeEnabled = false,
    favoritesEnabled = false,
    notificationsEnabled = false,
    searchBarEnabled = false,
    languageEnabled = false,
    ...props
}: AppLayoutProps) {
    const [user, , logout] = useUser();
    const toolbarProps = {
        fullScreenEnabled: fullScreenEnabled,
        messagesEnabled: messagesEnabled,
        shoppingCartEnabled: shoppingCartEnabled,
        darkModeEnabled: darkModeEnabled,
        favoritesEnabled: favoritesEnabled,
        notificationsEnabled: notificationsEnabled,
        searchBarEnabled: searchBarEnabled,
        languageEnabled: languageEnabled,
    };

    return (
        <AppLayoutTemplate
            toolbar={<AppToolbar user={user} onLogout={logout} userMenu={userMenu} {...toolbarProps} />}
            {...props}
        />
    );
}

export interface AppLayoutProps extends AppLayoutTemplateProps {
    userMenu?: menu_button_item[];
    fullScreenEnabled?: flag;
    messagesEnabled?: flag;
    shoppingCartEnabled?: flag;
    darkModeEnabled?: flag;
    favoritesEnabled?: flag;
    notificationsEnabled?: flag;
    searchBarEnabled?: flag;
    languageEnabled?: flag;
}

export default AppLayout;
