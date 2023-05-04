import { TextFieldProps } from '../TextField';
import NumberField from '../NumberField';
import SelectField from '../SelectField';
import { select_item } from '../../../types';

const defaultUnits = [
    { value: 'm3', label: 'unit_buildingvolume_m3' },
    { value: 'l', label: 'unit_buildingvolume_l' },
];

export function BuildingVolumeField({ units = defaultUnits, ...props }: BuildingVolumeFieldProps) {
    return (
        <div className="flex gap-4 w-full">
            <NumberField kind={'buildingVolume'} subName={'value'} {...props} className={'w-2/3'} />
            <SelectField kind={'buildingVolume'} subName={'unit'} values={units} {...props} className={'w-1/3'} />
        </div>
    );
}

export interface BuildingVolumeFieldProps extends TextFieldProps {
    units?: select_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BuildingVolumeField;
