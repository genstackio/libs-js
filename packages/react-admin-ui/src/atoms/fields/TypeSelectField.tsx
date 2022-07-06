import SelectField, {SelectFieldProps} from "./SelectField";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export function TypeSelectField({values, ...props}: TypeSelectFieldProps) {
    const { t } = useTranslation();

    values = useMemo(() => (values || []).map((x: any) => ({...(x || {}), label: t(x?.label || x?.value || '?')})), [values, t]);

    return <SelectField kind={'type'} values={values} {...props} />
}

export interface TypeSelectFieldProps extends SelectFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TypeSelectField;
