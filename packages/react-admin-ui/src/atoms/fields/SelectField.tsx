import FieldSet from '../FieldSet';
import { useField } from '../../hooks/useField';
import Select from 'react-select';
import { class_name, flag, select_item, register } from '../../types';
import clsx from 'clsx';

export function SelectField({ className, values = [], ...props }: SelectFieldProps) {
    const { name, label, error, helper, disabled, register, placeholder, options, defaultValue, extra } =
        useField(props);
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={clsx(className)}>
            <Select
                options={values}
                isDisabled={disabled}
                name={name}
                defaultValue={defaultValue}
                {...register()}
                placeholder={placeholder}
                {...extra}
            />
        </FieldSet>
    );
}

export interface SelectFieldProps {
    className?: class_name;
    values?: select_item[];
    required?: flag;
    disabled?: flag;
    errors?: { [key: string]: any };
    defaults?: { [key: string]: any };
    label?: string;
    name?: string;
    onChange?: any;
    options?: any;
    helper?: string;
    register?: register;
    field?: boolean;
    kind?: string;
}

export default SelectField;
