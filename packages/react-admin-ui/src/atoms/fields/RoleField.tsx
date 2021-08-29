import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SelectField, { SelectFieldProps } from './SelectField';
import { user_role } from '../../types';

export function RoleField({ roles: rawRoles = undefined, ...props }: RoleFieldProps) {
    const { t } = useTranslation();

    const roles = useMemo(
        () =>
            rawRoles || [
                { value: 'user', label: t('role_user_label') },
                { value: 'admin', label: t('role_admin_label') },
            ],
        [rawRoles],
    );

    return <SelectField defaultValue={'user'} kind={'role'} values={roles} {...props} />;
}

export interface RoleFieldProps extends SelectFieldProps {
    roles?: user_role[];
}

export default RoleField;
