import { Controller } from 'react-hook-form';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import { AsTextField } from '../../as';
import { useCallback } from 'react';
import clsx from 'clsx';

export function ComponentField({ marshall, unmarshall, component: Component, ...props }: ComponentFieldProps) {
    const {
        classes,
        className,
        required,
        defaultValue,
        name,
        error,
        disabled,
        options,
        control,
        label,
        helper,
        labelClassName,
        labelFormat,
        errorClassName,
        helperClassName,
        extra,
    } = useField({ kind: 'component', ...props });
    const convert = useCallback((v: any) => (marshall ? marshall(v, props) : v), [marshall, props]);
    const unconvert = useCallback((v: any) => (unmarshall ? unmarshall(v, props) : v), [unmarshall, props]);
    return (
        <FieldSet
            error={error}
            label={label}
            helper={helper}
            name={name}
            options={options}
            className={className}
            labelFormat={labelFormat}
            labelClassName={labelClassName}
            errorClassName={errorClassName}
            helperClassName={helperClassName}
        >
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{ required }}
                render={({ field }: any) => {
                    const v = convert((field || {}).value);
                    const handleOnChange = disabled
                        ? undefined
                        : (e: any) => {
                              return field.onChange({ target: { name: name, value: unconvert(e) } });
                          };
                    return (
                        <Component
                            {...field}
                            name={name}
                            kind={props.kind}
                            type={props['type']}
                            className={clsx('w-full border p-2', className)}
                            classes={classes}
                            disabled={disabled}
                            {...extra}
                            value={v}
                            onChange={handleOnChange}
                        />
                    );
                }}
            />
        </FieldSet>
    );
}

export interface ComponentFieldProps extends AsTextField {
    component: any;
    marshall?: Function;
    unmarshall?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default ComponentField;
