import { TextFieldProps } from '../TextField';
import NumberField from "../NumberField";
import SelectField from "../SelectField";
import {select_item} from "../../../types";

const defaultUnits = [
    {value: 'g', label: 'unit_buildingcharge_g'},
    {value: 'kg', label: 'unit_buildingcharge_kg'},
    {value: 'n', label: 'unit_buildingcharge_n'},
    {value: 'kn', label: 'unit_buildingcharge_kn'},
];

export function BuildingChargeField({units = defaultUnits, ...props}: BuildingChargeFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingCharge'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingCharge'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingChargeFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingChargeField;
