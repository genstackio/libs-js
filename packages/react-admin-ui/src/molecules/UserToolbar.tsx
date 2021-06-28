import MenuButton from './MenuButton';
import LocaleChange from '../atoms/LocaleChange';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { children, locales } from '../types';

export function UserToolbar({ user, onLogout, locales = [], children }: UserToolbarProps) {
    const { t } = useTranslation();

    const items = useMemo(() => [{ target: onLogout, label: t('button_logout_label') }], [onLogout]);

    const userName = useMemo(() => `${user!.firstName} ${user!.lastName}`, [user]);
    const userEmail = useMemo(() => user!.email, [user]);
    const userThumbnail = useMemo(() => ({ url: 'https://picsum.photos/40/40', alt: userName }), [user, userName]);

    return (
        <div className={'flex'}>
            <div className={'flex-1'}>{children || ''}</div>
            <LocaleChange locales={locales} />
            <MenuButton items={items} label={userName} description={userEmail} image={userThumbnail} />
        </div>
    );
}

export interface UserToolbarProps {
    children?: children;
    user?: any;
    onLogout?: Function;
    locales?: locales[];
}

export default UserToolbar;
