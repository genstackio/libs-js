import SelectField, {SelectFieldProps} from "./SelectField";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

const defaultValues = [
    {value: 'user', label: 'role_user_label'},
    {value: 'admin', label: 'role_admin_label'},
];

export function RoleSelectField({values, ...props}: RoleSelectFieldProps) {
    const { t } = useTranslation();

    values = useMemo(() => (values || defaultValues).map((x: any) => ({...(x || {}), label: t(x?.label || x?.value || '?')})), [values, t, defaultValues]);

    return <SelectField kind={'role'} values={values} {...props} />
}

export interface RoleSelectFieldProps extends SelectFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default RoleSelectField;
