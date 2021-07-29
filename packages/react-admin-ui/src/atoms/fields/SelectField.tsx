import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import Select from 'react-select';
import { flag, select_item, register } from '../../types';
import { WithClassName } from '../../withs';
import { useCallback } from 'react';

export function SelectField({ className, values = [], onChange, ...props }: SelectFieldProps) {
    const { name, label, error, helper, disabled, register, placeholder, options, defaultValue, extra } =
        useField(props);
    const xxx = register() || {};
    const originalOnChange = xxx.onChange;

    xxx.onChange = useCallback(
        (a) => {
            const z = { target: { value: a.value } };
            originalOnChange && originalOnChange(z);
            onChange && onChange(z);
        },
        [originalOnChange, onChange],
    );
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={className}>
            <Select
                options={values}
                isDisabled={disabled}
                name={name}
                defaultValue={defaultValue}
                {...xxx}
                placeholder={placeholder}
                {...extra}
            />
        </FieldSet>
    );
}

export interface SelectFieldProps extends WithClassName {
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
