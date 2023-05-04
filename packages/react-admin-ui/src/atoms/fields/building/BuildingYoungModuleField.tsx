import { TextFieldProps } from '../TextField';
import NumberField from "../NumberField";
import SelectField from "../SelectField";
import {select_item} from "../../../types";

const defaultUnits = [
    {value: 'pa', label: 'unit_buildingyoungmodule_pa'},
    {value: 'mpa', label: 'unit_buildingyoungmodule_mpa'},
];

export function BuildingYoungModuleField({units = defaultUnits, ...props}: BuildingYoungModuleFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingYoungModule'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingYoungModule'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingYoungModuleFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingYoungModuleField;
