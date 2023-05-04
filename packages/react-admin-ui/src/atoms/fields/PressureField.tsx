import { TextFieldProps } from './TextField';
import NameField from "./NameField";
import SelectField from "./SelectField";
import {select_item} from "../../types";

const defaultUnits = [
    {value: 'knm2', label: 'unit_pressure_knm2'},
    {value: 'kn', label: 'unit_pressure_kn'},
    {value: 'kndm2', label: 'unit_pressure_kndm2'},
];

export function PressureField({units = defaultUnits, ...props}: PressureFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NameField kind={'pressure'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'pressure'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface PressureFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default PressureField;
