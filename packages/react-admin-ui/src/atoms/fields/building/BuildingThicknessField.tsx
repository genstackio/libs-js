import { TextFieldProps } from '../TextField';
import NumberField from '../NumberField';
import SelectField from '../SelectField';
import { select_item } from '../../../types';

const defaultUnits = [
    { value: 'mm', label: 'unit_buildingthickness_mm' },
    { value: 'cm', label: 'unit_buildingthickness_cm' },
    { value: 'dm', label: 'unit_buildingthickness_dm' },
    { value: 'm', label: 'unit_buildingthickness_m' },
    { value: 'ft', label: 'unit_buildingthickness_ft' },
    { value: 'in', label: 'unit_buildingthickness_in' },
    { value: 'yd', label: 'unit_buildingthickness_yd' },
];

export function BuildingThicknessField({ units = defaultUnits, ...props }: BuildingThicknessFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingThickness'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingThickness'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingThicknessFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingThicknessField;
