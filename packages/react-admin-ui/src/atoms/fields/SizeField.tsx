import { TextFieldProps } from './TextField';
import NameField from "./NameField";
import SelectField from "./SelectField";
import {select_item} from "../../types";

const defaultUnits = [
    {value: 'mm', label: 'unit_size_mm'},
    {value: 'cm', label: 'unit_size_cm'},
    {value: 'dm', label: 'unit_size_dm'},
    {value: 'm', label: 'unit_size_m'},
    {value: 'ft', label: 'unit_size_ft'},
    {value: 'in', label: 'unit_size_in'},
    {value: 'yd', label: 'unit_size_yd'},
];

export function SizeField({units = defaultUnits, ...props}: SizeFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NameField kind={'size'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'size'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface SizeFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default SizeField;
