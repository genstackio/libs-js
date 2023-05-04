import { TextFieldProps } from './TextField';
import NameField from "./NameField";
import SelectField from "./SelectField";
import {select_item} from "../../types";

const defaultUnits = [
    {value: 'm3', label: 'unit_volume_m3'},
    {value: 'l', label: 'unit_volume_l'},
];

export function VolumeField({units = defaultUnits, ...props}: VolumeFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NameField kind={'volume'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'volume'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface VolumeFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default VolumeField;
