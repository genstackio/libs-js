import { TextFieldProps } from './TextField';
import NameField from "./NameField";
import SelectField from "./SelectField";
import {select_item} from "../../types";

const defaultUnits = [
    {value: 'm', label: 'unit_distance_m'},
    {value: 'km', label: 'unit_distance_km'},
    {value: 'mi', label: 'unit_distance_mi'},
    {value: 'yd', label: 'unit_distance_yd'},
];

export function DistanceField({units = defaultUnits, ...props}: DistanceFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NameField kind={'distance'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'distance'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface DistanceFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default DistanceField;
