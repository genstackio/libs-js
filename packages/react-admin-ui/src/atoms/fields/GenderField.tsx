import { useTranslation } from 'react-i18next';
import SelectField, { SelectFieldProps } from './SelectField';

export function GenderField(props: GenderFieldProps) {
    const { t } = useTranslation();
    const values = [
        { value: 'man', label: t('field_gender_value_man_label') },
        { value: 'woman', label: t('field_gender_value_woman_label') },
        { value: 'non-binary', label: t('field_gender_value_nonbinary_label') },
        { value: 'not-specified', label: t('field_gender_value_notspecified_label') },
    ];

    return <SelectField kind={'gender'} values={values} {...props} />;
}

export type GenderFieldProps = SelectFieldProps;

// noinspection JSUnusedGlobalSymbols
export default GenderField;
