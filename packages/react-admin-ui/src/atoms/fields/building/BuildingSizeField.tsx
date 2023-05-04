import { TextFieldProps } from '../TextField';
import NumberField from "../NumberField";
import SelectField from "../SelectField";
import {select_item} from "../../../types";

const defaultUnits = [
    {value: 'mm', label: 'unit_buildingsize_mm'},
    {value: 'cm', label: 'unit_buildingsize_cm'},
    {value: 'dm', label: 'unit_buildingsize_dm'},
    {value: 'm', label: 'unit_buildingsize_m'},
    {value: 'ft', label: 'unit_buildingsize_ft'},
    {value: 'in', label: 'unit_buildingsize_in'},
    {value: 'yd', label: 'unit_buildingsize_yd'},
];

export function BuildingSizeField({units = defaultUnits, ...props}: BuildingSizeFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingsize'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingsize'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingSizeFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingSizeField;
