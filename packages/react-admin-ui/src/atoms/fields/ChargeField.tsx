import { TextFieldProps } from './TextField';
import NameField from "./NameField";
import SelectField from "./SelectField";
import {select_item} from "../../types";

const defaultUnits = [
    {value: 'g', label: 'unit_charge_g'},
    {value: 'kg', label: 'unit_charge_kg'},
    {value: 'n', label: 'unit_charge_n'},
    {value: 'kn', label: 'unit_charge_kn'},
];

export function ChargeField({units = defaultUnits, ...props}: ChargeFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NameField kind={'charge'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'charge'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface ChargeFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default ChargeField;
