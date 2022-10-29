import MonacoEditor from 'react-monaco-editor';
import {Controller} from 'react-hook-form';
import useField from "../../hooks/useField";
import FieldSet from "../FieldSet";
import {AsTextField} from "../../as";
import {useMemo} from "react";
import convertValue from "../../utils/convertValue";

export function JsonField(props: JsonFieldProps) {
    const { className, required, defaultValue, name, error, disabled, options, control, label, helper } = useField({kind: 'json', ...props});
    const transformedDefaultValue = useMemo(() => {
        return convertValue(defaultValue);
    }, [defaultValue]);
    return (
        <FieldSet error={error} label={label} helper={helper} name={name} options={options} className={className}>
            <Controller
                name={name}
                control={control}
                defaultValue={transformedDefaultValue}
                rules={{ required }}
                render={(props: any) => {
                    const v = convertValue((props.field || {}).value);
                    const handleOnChange = disabled ? undefined : (e: any) => {
                        return props.field.onChange({target: {name: name, value: {content: e}}});
                    }
                    return (
                        <MonacoEditor
                            width="800"
                            height="300"
                            language="json"
                            value={v}
                            onChange={handleOnChange}
                        />
                    );
                }}
            />
        </FieldSet>
    );
}

export interface JsonFieldProps extends AsTextField {
}

export default JsonField;
