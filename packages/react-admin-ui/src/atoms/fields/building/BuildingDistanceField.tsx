import { TextFieldProps } from '../TextField';
import NumberField from '../NumberField';
import SelectField from '../SelectField';
import { select_item } from '../../../types';

const defaultUnits = [
    { value: 'm', label: 'unit_buildingdistance_m' },
    { value: 'km', label: 'unit_buildingdistance_km' },
    { value: 'mi', label: 'unit_buildingdistance_mi' },
    { value: 'yd', label: 'unit_buildingdistance_yd' },
];

export function BuildingDistanceField({ units = defaultUnits, ...props }: BuildingDistanceFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingDistance'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingDistance'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingDistanceFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingDistanceField;
