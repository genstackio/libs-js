import SelectField, {SelectFieldProps} from "./SelectField";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

const defaultValues = [
];

export function FeaturesSelectField({values, ...props}: FeaturesSelectFieldProps) {
    const { t } = useTranslation();

    values = useMemo(() => (values || defaultValues).map((x: any) => ({...(x || {}), label: t(x?.label || x?.value || '?')})), [values, t, defaultValues]);

    return <SelectField kind={'features'} multiple values={values} {...props} />
}

export interface FeaturesSelectFieldProps extends SelectFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default FeaturesSelectField;
