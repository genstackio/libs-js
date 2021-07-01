import { useMemo } from 'react';
import clsx from 'clsx';
import MenuButton from './MenuButton';
import { useTranslation } from 'react-i18next';
import { children, class_name } from '../types';
import {
    DarkModeToolbarItem,
    FavoriteToolbarItem,
    FullscreenToolbarItem,
    LanguageToolbarItem,
    MessageToolbarItem,
    NotificationToolbarItem,
    SearchToolbarItem,
    ShoppingCartToolbarItem,
} from '../atoms/toolbar-items';
import { useToggle } from '../hooks/useToggle';

export function UserToolbar({ className, user, onSearch, onLogout, children }: UserToolbarProps) {
    const { t } = useTranslation();

    const items = useMemo(() => [{ target: onLogout, label: t('button_logout_label') }], [onLogout]);

    const userName = useMemo(() => `${user!.firstName} ${user!.lastName}`, [user]);
    const userEmail = useMemo(() => user!.email, [user]);
    const userThumbnail = useMemo(() => ({ url: 'https://picsum.photos/40/40', alt: userName }), [user, userName]);

    const [search, toggleSearch] = useToggle();
    const baseIconClassName = 'my-1.5 mx-2.5 xs:mx-1';
    const toolbarIconClassName = clsx(baseIconClassName, search && 'hidden');

    return (
        <div className={clsx('flex items-center', className)}>
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

export interface UserToolbarProps {
    className?: class_name;
    children?: children;
    user?: any;
    onLogout?: Function;
    onSearch?: Function;
}

export default UserToolbar;
