import { Controller } from 'react-hook-form';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import { AsTextField } from '../../as';
import { forwardRef, useCallback } from 'react';
import clsx from 'clsx';
import stopPrevent from '../../utils/stopPrevent';
import { class_name } from '../../types';
import findValue from '../../utils/findValue';

const DefaultWrapperComponent = forwardRef<any>(({ className, children }: any, ref) => {
    return (
        <div className={clsx(className || 'flex flex-col space-y-4')} ref={ref}>
            {children}
        </div>
    );
});

function DefaultComponent({ className, selected = false, label, onClick }: any) {
    return (
        <div
            className={clsx('p-4 cursor-pointer', className, selected ? 'bg-primary' : 'bg-secondary hover:bg-primary')}
            onClick={onClick}
        >
            {label}
        </div>
    );
}

const defaultValues: any[] = [];
export function SelectorField({
    values = defaultValues,
    itemClassName,
    wrapperClassName,
    marshall,
    unmarshall,
    wrapperComponent: WrapperComponent = DefaultWrapperComponent,
    component: Component = DefaultComponent,
    itemProps,
    multiple,
    ...props
}: SelectorFieldProps) {
    const {
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
        extra,
        labelClassName,
        labelFormat,
        errorClassName,
        helperClassName,
        center,
        rounded,
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
            center={center}
            rounded={rounded}
        >
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{ required }}
                render={({ field }: any) => {
                    const rawValue = (field || {}).value;
                    const v = convert(
                        undefined !== rawValue ? findValue(values, rawValue, undefined, multiple) : undefined,
                    );
                    const handleOnChange = disabled
                        ? undefined
                        : (e: any) => {
                              if (multiple) {
                                  const vv = e.value;
                                  let rv = rawValue || [];
                                  if (rv.find((x) => x === vv)) {
                                      rv = rv.filter((x) => x !== vv);
                                  } else {
                                      rv = [...rv, vv];
                                  }
                                  return field.onChange({ target: unconvert({ value: rv }) });
                              }
                              return field.onChange({ target: unconvert(e ? e : { value: undefined }) });
                          };
                    const createOnToggle = (item: any) => () => {
                        handleOnChange && handleOnChange(item?.value === v?.value ? undefined : item);
                    };
                    const createOnClick = (item: any) => (e: any) => {
                        stopPrevent(e);
                        createOnToggle(item)();
                    };

                    return (
                        <WrapperComponent
                            className={wrapperClassName}
                            {...field}
                            name={name}
                            kind={props.kind}
                            disabled={disabled}
                            center={center}
                            rounded={rounded}
                            {...extra}
                        >
                            {(values || []).map((item: any, i: number) => (
                                <Component
                                    key={item?.value || i}
                                    {...(itemProps || {})}
                                    {...item}
                                    className={itemClassName}
                                    selected={
                                        (undefined !== v?.value || multiple) && multiple
                                            ? (v || []).filter((x) => x?.value === item?.value)?.length > 0
                                            : item?.value === v?.value
                                    }
                                    onToggle={createOnToggle(item)}
                                    onClick={createOnClick(item)}
                                    center={center}
                                    rounded={rounded}
                                />
                            ))}
                        </WrapperComponent>
                    );
                }}
            />
        </FieldSet>
    );
}

export interface SelectorFieldProps extends AsTextField {
    component?: any;
    wrapperComponent?: any;
    wrapperClassName?: class_name;
    itemClassName?: class_name;
    itemProps?: Record<string, any>;
    marshall?: Function;
    unmarshall?: Function;
    values?: any[];
    multiple?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default SelectorField;
