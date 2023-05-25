import { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { AsChoiceField } from '../../as';
import { useTranslation } from 'react-i18next';
import { select_item } from '../../types';
import findValue from '../../utils/findValue';

const defaultValues = [];

export function SelectField({
    className,
    onChange: parentOnChange,
    multiple,
    values = defaultValues,
    sort = false,
    ...props
}: SelectFieldProps) {
    const {
        name,
        label,
        error,
        helper,
        disabled,
        placeholder,
        options,
        defaultValue,
        extra,
        control,
        labelClassName,
        labelFormat,
        errorClassName,
        helperClassName,
        center,
        rounded,
    } = useField(props);

    const { t } = useTranslation();
    const handleChange = useCallback(
        (x) => (val) => {
            x && x(multiple ? (val || []).map((x: any) => x.value) : val.value);
            parentOnChange && parentOnChange({ target: val });
        },
        [parentOnChange, multiple],
    );

    const finalValues: select_item[] = useMemo(() => {
        const vals: select_item[] =
            values?.map((x) => (!x ? x : x?.label && 'string' === typeof x.label ? { ...x, label: t(x.label) } : {})) ||
            [];
        if (sort) {
            vals.sort((a: select_item, b: select_item) => {
                const x = a.label || a.value || '';
                const y = b.label || b.value || '';
                return x > y ? 1 : x < y ? -1 : 0;
            });
            vals.forEach((vv: any) => {
                if (vv.options) {
                    vv.options.sort((a: select_item, b: select_item) => {
                        const x = a.label || a.value || '';
                        const y = b.label || b.value || '';
                        return x > y ? 1 : x < y ? -1 : 0;
                    });
                }
            });
        }
        return vals;
    }, [values, t, sort]);

    return (
        <FieldSet
            error={error}
            helper={helper}
            label={label}
            name={name}
            options={options}
            className={className}
            labelFormat={labelFormat}
            labelClassName={labelClassName}
            errorClassName={errorClassName}
            helperClassName={helperClassName}
            center={center}
            rounded={rounded}
        >
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
                        value={findValue(finalValues, value, defaultValue, multiple)}
                        {...extra}
                    />
                )}
            />
        </FieldSet>
    );
}

export interface SelectFieldProps extends AsChoiceField {
    multiple?: boolean;
    sort?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default SelectField;
