import MenuButton from './MenuButton';
import LocaleChange from '../atoms/LocaleChange';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { children, class_name, locale } from '../types';
import clsx from 'clsx';

export function UserToolbar({ className, user, onLogout, locales = [], children }: UserToolbarProps) {
    const { t } = useTranslation();

    const items = useMemo(() => [{ target: onLogout, label: t('button_logout_label') }], [onLogout]);

    const userName = useMemo(() => `${user!.firstName} ${user!.lastName}`, [user]);
    const userEmail = useMemo(() => user!.email, [user]);
    const userThumbnail = useMemo(() => ({ url: 'https://picsum.photos/40/40', alt: userName }), [user, userName]);

    return (
        <div className={clsx('flex', className)}>
            <div className={'flex-1'}>{children || ''}</div>
            <LocaleChange locales={locales} />
            <MenuButton items={items} label={userName} description={userEmail} image={userThumbnail} />
        </div>
    );
}

export interface UserToolbarProps {
    className?: class_name;
    children?: children;
    user?: any;
    onLogout?: Function;
    locales?: locale[];
}

export default UserToolbar;
