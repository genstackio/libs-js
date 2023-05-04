import { TextFieldProps } from '../TextField';
import NumberField from '../NumberField';
import SelectField from '../SelectField';
import { select_item } from '../../../types';

const defaultUnits = [
    { value: 'knm2', label: 'unit_buildingpressure_knm2' },
    { value: 'kn', label: 'unit_buildingpressure_kn' },
    { value: 'kndm2', label: 'unit_buildingpressure_kndm2' },
    { value: 'pa', label: 'unit_buildingpressure_pa' },
    { value: 'mpa', label: 'unit_buildingpressure_mpa' },
];

export function BuildingPressureField({ units = defaultUnits, ...props }: BuildingPressureFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingPressure'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingPressure'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingPressureFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingPressureField;
