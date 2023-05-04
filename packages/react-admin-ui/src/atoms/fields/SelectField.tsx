import {useCallback, useMemo} from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { AsChoiceField } from '../../as';
import {useTranslation} from "react-i18next";
import {select_item} from "../../types";

const defaultValues = [];

export function SelectField({
    className,
    onChange: parentOnChange,
    multiple,
    values = defaultValues,
    ...props
}: SelectFieldProps) {
    const { name, label, error, helper, disabled, placeholder, options, defaultValue, extra, control } =
        useField(props);

    const {t} = useTranslation();
    const handleChange = useCallback(
        (x) => (val) => {
            x && x(multiple ? (val || []).map((x: any) => x.value) : val.value);
            parentOnChange && parentOnChange({ target: val });
        },
        [parentOnChange, multiple],
    );

    const finalValues: select_item[] = useMemo(() => values?.map(x => !x ? x : ((x?.label && ('string' === typeof x.label)) ? {...x, label: t(x.label)} : {})) || [], [values, t])

    return (
        <FieldSet error={error} helper={helper} label={label} name={name} options={options} className={className}>
            <Controller
                control={control}
                defaultValue={defaultValue}
                name={name}
                render={({ field: { ref, value, onChange, ...field } }: any) => (
                    <Select
                        {...('undefined' !== typeof document ? { menuPortalTarget: document.body } : {})}
                        styles={{
                            // Fixes the overlapping problem of the component
                            menuPortal: (provided: any) => ({ ...provided, zIndex: 19999 }),
                            menu: (provided: any) => ({ ...provided, zIndex: 19999 }),
                        }}
                        {...field}
                        isMulti={!!multiple}
                        inputRef={ref}
                        isDisabled={disabled}
                        onChange={handleChange(onChange)}
                        options={finalValues}
                        placeholder={placeholder}
                        value={
                            multiple
                                ? finalValues.filter((c) => {
                                      if (!value || !Array.isArray(value) || !value.length) return false;
                                      return value.includes(c.value);
                                  })
                                : finalValues.find((c) =>
                                      undefined !== value && '' !== value
                                          ? c.value === value
                                          : c.value === defaultValue,
                                  )
                        }
                        {...extra}
                    />
                )}
            />
        </FieldSet>
    );
}

export interface SelectFieldProps extends AsChoiceField {
    multiple?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default SelectField;
