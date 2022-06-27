import SelectField, {SelectFieldProps} from "./SelectField";
import {useTranslation} from "react-i18next";

export function LocaleField(props: LocaleFieldProps) {
    const { t } = useTranslation();

    const locales = [
        {value: 'fr_FR', label: t('locale_fr_fr')},
        {value: 'fr_LU', label: t('locale_fr_lu')},
        {value: 'fr_MC', label: t('locale_fr_mc')},
        {value: 'fr_BE', label: t('locale_fr_be')},
        {value: 'fr_CA', label: t('locale_fr_ca')},
        {value: 'en_GB', label: t('locale_en_gb')},
        {value: 'en_US', label: t('locale_en_us')},
        {value: 'it_IT', label: t('locale_it_it')},
        {value: 'es_ES', label: t('locale_es_es')},
    ];
    locales.sort((a, b) => a.label > b.label ? 1 : (a.label < b.label ? -1 : 0))

    return <SelectField kind={'locale'} values={locales} {...props} />
}

export interface LocaleFieldProps extends SelectFieldProps {
}

export default LocaleField;
