import TextField, { TextFieldProps } from './TextField';
import {useCallback} from "react";
import convertToDateInput from "../../utils/convertToDateInput";
import convertFromDateInput from "../../utils/convertFromDateInput";

export function DateField({convertValue: originalConvertValue, valueAs: originalValueAs, ...props}: DateFieldProps) {
    const convertValue = useCallback((v: any) => {
        v = convertToDateInput(v, props.type);
        return originalConvertValue ? originalConvertValue(v) : v;
    }, [originalConvertValue, props.type]);
    const valueAs = useCallback((v: any) => {
        v = convertFromDateInput(v, props.type);
        if (originalValueAs) {
            switch (originalValueAs) {
                case 'date': return new Date(v);
                case 'number': return 'number' === typeof v ? v : parseInt(v);
                default:
                    if ('function' === typeof originalValueAs) {
                        return originalValueAs(v);
                    }
                    return v;
            }
        }
        return v;
    }, [originalValueAs, props.type]);

    return <TextField kind={'date'} type={'date'} {...props} convertValue={convertValue} valueAs={valueAs} />;
}

export type DateFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DateField;
