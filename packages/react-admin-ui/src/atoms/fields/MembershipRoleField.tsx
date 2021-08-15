import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import RoleField, { RoleFieldProps } from './RoleField';

export function MembershipRoleField({ roles: rawRoles = undefined, ...props }: MembershipRoleFieldProps) {
    const { t } = useTranslation();
    const roles = useMemo(
        () =>
            rawRoles || [
                { value: 'user', label: t('role_user_label') },
                { value: 'admin', label: t('role_admin_label') },
                { value: 'owner', label: t('role_owner_label') },
                { value: 'guest', label: t('role_guest_label') },
            ],
        [rawRoles],
    );

    return <RoleField roles={roles} {...props} />;
}

export type MembershipRoleFieldProps = RoleFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MembershipRoleField;
