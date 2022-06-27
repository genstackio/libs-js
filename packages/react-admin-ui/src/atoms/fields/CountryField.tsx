import SelectField, {SelectFieldProps} from "./SelectField";
import {useTranslation} from "react-i18next";

export function CountryField(props: CountryFieldProps) {
    const { t } = useTranslation();

    const countries = [
        {value: 'FR', label: t('country_fr')},
        {value: 'US', label: t('country_us')},
        {value: 'IT', label: t('country_it')},
        {value: 'PT', label: t('country_pt')},
        {value: 'GB', label: t('country_gb')},
        {value: 'MC', label: t('country_mc')},
        {value: 'LU', label: t('country_lu')},
        {value: 'CA', label: t('country_ca')},
        {value: 'ES', label: t('country_es')},
        {value: 'CH', label: t('country_ch')},
        {value: 'BE', label: t('country_be')},
        {value: 'RE', label: t('country_re')},
    ];
    countries.sort((a, b) => a.label > b.label ? 1 : (a.label < b.label ? -1 : 0))

    return <SelectField kind={'country'} values={countries} {...props} />
}

export interface CountryFieldProps extends SelectFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default CountryField;
