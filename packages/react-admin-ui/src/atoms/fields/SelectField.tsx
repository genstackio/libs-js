import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { useCallback } from 'react';
import { AsChoiceField } from '../../as';

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
                render={({ field: { ref, value, onChange, ...field } }: any) => {
                    console.log(value);
                    return (
                        <Select
                            {...field}
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

export type SelectFieldProps = AsChoiceField;

// noinspection JSUnusedGlobalSymbols
export default SelectField;
