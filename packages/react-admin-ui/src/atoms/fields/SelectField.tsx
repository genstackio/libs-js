import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import Select from 'react-select';
import { select_item } from '../../types';
import {
    WithClassName,
    WithDefaultValues,
    WithDisabled,
    WithErrors,
    WithField,
    WithHelper,
    WithKind,
    WithLabel,
    WithName,
    WithOnChange,
    WithOptions,
    WithRegister,
    WithRequired,
} from '../../withs';
import { Controller } from 'react-hook-form';
import { useCallback } from 'react';

export function SelectField({ className, values = [], onChange: parentOnChange, ...props }: SelectFieldProps) {
    const { name, label, error, helper, disabled, placeholder, options, defaultValue, extra, control } =
        useField(props);

    const handleChange = useCallback(
        (x) => (val) => {
            x && x(val.value);
            parentOnChange && parentOnChange({ target: val });
        },
        [parentOnChange],
    );
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={className}>
            <Controller
                control={control}
                defaultValue={defaultValue}
                name={name}
                render={({ onChange, value, name, ref }: any) => {
                    return (
                        <Select
                            name={name}
                            inputRef={ref}
                            isDisabled={disabled}
                            options={values}
                            value={values.find((c) =>
                                undefined !== value && '' !== value ? c.value === value : c.value === defaultValue,
                            )}
                            onChange={handleChange(onChange)}
                            placeholder={placeholder}
                            {...extra}
                        />
                    );
                }}
            />
        </FieldSet>
    );
}

export interface SelectFieldProps
    extends WithClassName,
        WithDisabled,
        WithRequired,
        WithErrors,
        WithName,
        WithHelper,
        WithRegister,
        WithField,
        WithOnChange,
        WithOptions,
        WithKind,
        WithDefaultValues,
        WithLabel {
    values?: select_item[];
}

export default SelectField;
