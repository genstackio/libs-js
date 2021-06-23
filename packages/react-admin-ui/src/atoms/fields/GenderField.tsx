import SelectField, {SelectFieldProps} from "./SelectField";
import {useTranslation} from "react-i18next";

export function GenderField(props: GenderFieldProps) {
    const {t} = useTranslation();
    const values = [
        {value: 'man', label: t('field_gender_value_man_label')},
        {value: 'woman', label: t('field_gender_value_woman_label')},
        {value: 'non-binary', label: t('field_gender_value_nonbinary_label')},
        {value: 'not-specified', label: t('field_gender_value_notspecified_label')},
    ]
    return (
        <SelectField kind={'gender'} values={values} {...props} />
    )
}

export interface GenderFieldProps extends SelectFieldProps {
}

export default GenderField
