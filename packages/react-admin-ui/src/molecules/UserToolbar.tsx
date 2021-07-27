import { useMemo } from 'react';
import clsx from 'clsx';
import MenuButton from './MenuButton';
import { useTranslation } from 'react-i18next';
import DarkModeToolbarItem from '../atoms/toolbar-items/DarkModeToolbarItem';
import FavoriteToolbarItem from '../atoms/toolbar-items/FavoriteToolbarItem';
import FullscreenToolbarItem from '../atoms/toolbar-items/FullscreenToolbarItem';
import LanguageToolbarItem from '../atoms/toolbar-items/LanguageToolbarItem';
import MessageToolbarItem from '../atoms/toolbar-items/MessageToolbarItem';
import NotificationToolbarItem from '../atoms/toolbar-items/NotificationToolbarItem';
import SearchToolbarItem from '../atoms/toolbar-items/SearchToolbarItem';
import ShoppingCartToolbarItem from '../atoms/toolbar-items/ShoppingCartToolbarItem';
import { useToggle } from '../hooks/useToggle';
import { WithChildren, WithClassName } from '../withs';
import {menu_button_item} from "../types";

export function UserToolbar({ className, user, onSearch, onLogout, userMenu = [], children }: UserToolbarProps) {
    const { t } = useTranslation();

    const items = useMemo(() => [...userMenu, { target: onLogout, label: t('button_logout_label') }], [onLogout]);

    const userName = useMemo(() => `${user!.firstName} ${user!.lastName}`, [user]);
    const userEmail = useMemo(() => user!.email, [user]);
    const userThumbnail = useMemo(() => ({ url: 'https://picsum.photos/40/40', alt: userName }), [user, userName]);

    const [search, toggleSearch] = useToggle();
    const baseIconClassName = 'my-1.5 mx-3 xs:mx-1';
    const toolbarIconClassName = clsx(baseIconClassName, search && 'hidden');

    return (
        <div className={clsx('w-full flex items-center', className)}>
            <div className={clsx('flex-1', search && 'hidden')}>{children || ''}</div>
            <LanguageToolbarItem className={toolbarIconClassName} />
            <SearchToolbarItem
                active={search}
                onToggle={toggleSearch}
                onChange={onSearch}
                className={baseIconClassName}
            />
            <NotificationToolbarItem className={toolbarIconClassName} />
            <FavoriteToolbarItem className={toolbarIconClassName} />
            <DarkModeToolbarItem className={toolbarIconClassName} />
            <ShoppingCartToolbarItem className={toolbarIconClassName} />
            <MessageToolbarItem className={toolbarIconClassName} />
            <FullscreenToolbarItem className={toolbarIconClassName} />
            <MenuButton
                items={items}
                label={userName}
                description={userEmail}
                image={userThumbnail}
                className={clsx('ml-2.5 xs:ml-1', search && 'hidden')}
            />
        </div>
    );
}

export interface UserToolbarProps extends WithClassName, WithChildren {
    user?: any;
    onLogout?: Function;
    onSearch?: Function;
    userMenu?: menu_button_item[];
}

export default UserToolbar;
