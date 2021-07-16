import clsx from 'clsx';
import MuiSlider from '@material-ui/core/Slider';
import boxClass from '../utils/boxClass';
import { ChangeEvent } from 'react';
import { WithBoxColor } from '../withs';

export function Slider({ min, max, value, defaultValue, onChange, color }: SliderProps) {
    return (
        <MuiSlider
            valueLabelDisplay={'on'}
            aria-label={'slider'}
            min={min}
            max={max}
            defaultValue={defaultValue}
            className={clsx(boxClass({ color, variant: 'filled' }), 'bg-transparent mt-12')}
            classes={
                {
                    thumb: 'h-6 w-6 border-2 border-current -mt-2 -ml-3',
                    track: 'h-2',
                    rail: 'h-2',
                    valueLabel: '-left-2/4 ml-1',
                } as any
            }
            value={value}
            onChange={onChange}
        />
    );
}

export interface SliderProps extends WithBoxColor {
    min?: number;
    max?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (event: ChangeEvent<any>, value: number | number[]) => void;
}

export default Slider;