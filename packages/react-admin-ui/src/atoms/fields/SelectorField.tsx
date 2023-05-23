import { Controller } from 'react-hook-form';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import { AsTextField } from '../../as';
import {forwardRef, useCallback} from 'react';
import clsx from 'clsx';
import stopPrevent from '../../utils/stopPrevent';
import { class_name } from '../../types';

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
    ...props
}: SelectorFieldProps) {
    const { className, required, defaultValue, name, error, disabled, options, control, label, helper, extra } =
        useField({ kind: 'component', ...props });
    const convert = useCallback((v: any) => (marshall ? marshall(v, props) : v), [marshall, props]);
    const unconvert = useCallback((v: any) => (unmarshall ? unmarshall(v, props) : v), [unmarshall, props]);
    return (
        <FieldSet error={error} label={label} helper={helper} name={name} options={options} className={className}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{ required }}
                render={({ field }: any) => {
                    const rawValue = (field || {}).value;
                    const v = convert(undefined !== rawValue ? values.find((x) => x.value === rawValue) : undefined);
                    const handleOnChange = disabled
                        ? undefined
                        : (e: any) => {
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
                            {...extra}
                        >
                            {(values || []).map((item: any, i: number) => (
                                <Component
                                    key={item?.value || i}
                                    {...item}
                                    className={itemClassName}
                                    selected={undefined !== v?.value && item?.value === v?.value}
                                    onToggle={createOnToggle(item)}
                                    onClick={createOnClick(item)}
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
    marshall?: Function;
    unmarshall?: Function;
    values?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default SelectorField;
