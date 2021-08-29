import { useMemo } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import MenuButton from './MenuButton';
import Div from '../atoms/Div';
import Cell from '../atoms/Cell';
import DarkModeToolbarItem from '../atoms/toolbar-items/DarkModeToolbarItem';
import FavoriteToolbarItem from '../atoms/toolbar-items/FavoriteToolbarItem';
import FullscreenToolbarItem from '../atoms/toolbar-items/FullscreenToolbarItem';
import LanguageToolbarItem from '../atoms/toolbar-items/LanguageToolbarItem';
import MessageToolbarItem from '../atoms/toolbar-items/MessageToolbarItem';
import NotificationToolbarItem from '../atoms/toolbar-items/NotificationToolbarItem';
import SearchToolbarItem from '../atoms/toolbar-items/SearchToolbarItem';
import ShoppingCartToolbarItem from '../atoms/toolbar-items/ShoppingCartToolbarItem';
import { useToggle } from '../hooks/useToggle';
import { menu_button_item, flag } from '../types';
import { AsWrapper } from '../as';
import { WithOnLogout, WithOnSearch, WithUser } from '../withs';

export function UserToolbar({
    children,
    className,
    darkModeEnabled = false,
    favoritesEnabled = false,
    fullScreenEnabled = false,
    languageEnabled = false,
    messagesEnabled = false,
    notificationsEnabled = false,
    onLogout,
    onSearch,
    searchBarEnabled = false,
    shoppingCartEnabled = false,
    user,
    userMenu = [],
}: UserToolbarProps) {
    const { t } = useTranslation();
    const items = useMemo(() => [...userMenu, { target: onLogout, label: t('button_logout_label') }], [onLogout]);
    const userName = useMemo(() => `${user!.firstName} ${user!.lastName}`, [user]);
    const userEmail = useMemo(() => user!.email, [user]);
    const userThumbnail = useMemo(
        () => (user!.picture ? { url: user!.picture, alt: userName } : undefined),
        [user, userName],
    );
    const [search, toggleSearch] = useToggle();
    const baseIconClassName = 'my-1.5 mx-1 sm:mx-3';
    const toolbarIconClassName = clsx(baseIconClassName, search && 'hidden');

    return (
        <Div center flex full className={className}>
            <Cell hidden={search}>{children}</Cell>
            {languageEnabled && <LanguageToolbarItem className={toolbarIconClassName} />}
            {searchBarEnabled && (
                <SearchToolbarItem
                    active={search}
                    onChange={onSearch}
                    onToggle={toggleSearch}
                    className={baseIconClassName}
                />
            )}
            {notificationsEnabled && <NotificationToolbarItem className={toolbarIconClassName} />}
            {favoritesEnabled && <FavoriteToolbarItem className={toolbarIconClassName} />}
            {darkModeEnabled && <DarkModeToolbarItem className={toolbarIconClassName} />}
            {shoppingCartEnabled && <ShoppingCartToolbarItem className={toolbarIconClassName} />}
            {messagesEnabled && <MessageToolbarItem className={toolbarIconClassName} />}
            {fullScreenEnabled && <FullscreenToolbarItem className={toolbarIconClassName} />}
            <MenuButton
                avatar
                description={userEmail}
                label={userName}
                image={userThumbnail}
                items={items}
                className={clsx('ml-1 sm:ml-2.5', search && 'hidden')}
            />
        </Div>
    );
}

export interface UserToolbarProps extends AsWrapper, WithOnLogout, WithOnSearch, WithUser {
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

// noinspection JSUnusedGlobalSymbols
export default UserToolbar;
