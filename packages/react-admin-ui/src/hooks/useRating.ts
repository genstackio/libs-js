import { useCallback, useState } from 'react';
import range from '../utils/range';

// noinspection JSUnusedLocalSymbols
export function useRating(props, { reverse = false }: { reverse?: boolean } = {}) {
    const { min, max, labelPlacement, onChange, onHover, value, defaultValue } = props;
    let { values = [] } = props;

    const readOnly = !!value;
    values = values && values.length ? values : range(min, max).map((i) => ({ value: i, label: i }));

    const initial = value || defaultValue || undefined;

    const [currentValue, setCurrentValue] = useState<string | number | undefined>(initial);
    const [hoverValue, setHoverValue] = useState<string | number | undefined>(undefined);
    const handleChange = useCallback(
        (event, newIndex) => {
            const newValue = values[newIndex - 1];
            onChange && onChange(newValue?.value);
            setCurrentValue(newValue?.value);
        },
        [onChange, setCurrentValue, values],
    );
    const handleHover = useCallback(
        (event, newIndex) => {
            const newValue = values[newIndex - 1];
            onHover && onHover(newValue?.value);
            setHoverValue(newValue?.value);
        },
        [setHoverValue, values],
    );
    const atChange = undefined !== value ? (onChange as any) : handleChange;

    const integerValue = getIntegerValueForValue(value, values);
    const integerDefaultValue = getIntegerValueForValue(defaultValue, values);
    const labels = values.map((v) => v.label || v.value);
    const label =
        labelPlacement !== 'none'
            ? (values.find((v) => v.value === (hoverValue || currentValue)) || {}).label
            : undefined;

    return {
        max: labels.length,
        readOnly,
        value: integerValue,
        defaultValue: integerDefaultValue,
        atChange,
        onHover: handleHover,
        label,
        labels,
    };
}

function getIntegerValueForValue(value: string | number | undefined, values: any[]) {
    if (undefined === value) return undefined;
    const i = values.findIndex((v) => v.value === value);
    return -1 === i ? undefined : i + 1;
}
export default useRating;
