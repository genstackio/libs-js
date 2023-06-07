import { forwardRef } from 'react';
import { TextFieldProps } from './TextField';
import ComponentField from './ComponentField';
import convertToDateInput from '../../utils/convertToDateInput';
import convertFromDateInput from '../../utils/convertFromDateInput';

const DateComponent = forwardRef(({ center, rounded, ...props }: any, ref) => {
    return <input ref={ref} {...props} />;
});
function marshall(v: any, { type }) {
    return convertToDateInput(v, type);
}
function unmarshall(v: any, { type }: any) {
    return convertFromDateInput(v?.target?.value, type);
}

export function DateField({ ...props }: DateFieldProps) {
    return (
        <ComponentField
            component={DateComponent}
            kind={'date'}
            type={'date'}
            {...props}
            marshall={marshall}
            unmarshall={unmarshall}
        />
    );
}

export type DateFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DateField;
