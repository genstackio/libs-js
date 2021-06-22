import FieldSet from "../FieldSet";
import {useField} from "../../hooks/useField";
import Select from 'react-select';
import {class_name, select_item} from '../../types';

export function SelectField({className, values = [], ...props}: SelectFieldProps) {
    const {name, label, error, helper, disabled, register, placeholder, options, defaultValue, extra} = useField(props);
    return (
        <FieldSet className={className} name={name} label={label} options={options} error={error} helper={helper}>
            <Select options={values} isDisabled={disabled} name={name} defaultValue={defaultValue} {...register()} placeholder={placeholder} {...extra} />
        </FieldSet>
    );
}

export interface SelectFieldProps {
    className?: class_name,
    values?: select_item[],
}

export default SelectField
