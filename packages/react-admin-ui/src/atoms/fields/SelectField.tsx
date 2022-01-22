import { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { AsChoiceField } from '../../as';

const defaultValues = [];

export function SelectField({ className, onChange: parentOnChange, values = defaultValues, ...props }: SelectFieldProps) {
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
        <FieldSet error={error} helper={helper} label={label} name={name} options={options} className={className}>
            <Controller
                control={control}
                defaultValue={defaultValue}
                name={name}
                render={({ field: { ref, value, onChange, ...field } }: any) => (
                    <Select
                        {...(('undefined' !== typeof document) ? {menuPortalTarget: document.body} : {})}
                        styles={{
                            // Fixes the overlapping problem of the component
                            menuPortal: (provided: any) => ({ ...provided, zIndex: 19999 }),
                            menu: (provided: any) => ({ ...provided, zIndex: 19999 }),
                        }}
                        {...field}
                        inputRef={ref}
                        isDisabled={disabled}
                        onChange={handleChange(onChange)}
                        options={values}
                        placeholder={placeholder}
                        value={values.find((c) =>
                            undefined !== value && '' !== value ? c.value === value : c.value === defaultValue,
                        )}
                        {...extra}
                    />
                )}
            />
        </FieldSet>
    );
}

export type SelectFieldProps = AsChoiceField;

// noinspection JSUnusedGlobalSymbols
export default SelectField;
