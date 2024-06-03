import MonacoEditor from 'react-monaco-editor';
import { Controller } from 'react-hook-form';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import { AsTextField } from '../../as';
import { useMemo } from 'react';
import convertValue from '../../utils/convertValue';

export function CodeEditorField({
    language = 'json',
    width = undefined,
    height = 500,
    asString = false,
    ...props
}: CodeEditorFieldProps) {
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
        labelFormat,
        labelClassName,
        errorClassName,
        helperClassName,
        center,
        rounded,
    } = useField({
        kind: 'codeeditor',
        ...props,
    });
    const transformedDefaultValue = useMemo(() => {
        return convertValue(defaultValue);
    }, [defaultValue]);
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
                defaultValue={transformedDefaultValue}
                rules={{ required }}
                render={(props: any) => {
                    const v = convertValue((props.field || {}).value);
                    const handleOnChange = disabled
                        ? undefined
                        : (e: any) => {
                              return props.field.onChange({
                                  target: { name: name, value: asString ? e : { content: e } },
                              });
                          };
                    return (
                        <MonacoEditor
                            height={height}
                            width={width}
                            language={language}
                            value={v}
                            onChange={handleOnChange}
                        />
                    );
                }}
            />
        </FieldSet>
    );
}

export interface CodeEditorFieldProps extends AsTextField {
    width?: any;
    height?: any;
    language?: string;
    asString?: boolean;
}

export default CodeEditorField;
