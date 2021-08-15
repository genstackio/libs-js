import clsx from 'clsx';
import MuiSlider from '@material-ui/core/Slider';
import boxClass from '../utils/boxClass';
import { ChangeEvent } from 'react';
import { WithColorOfBox, WithDefaultValueAsNumber, WithMax, WithMin, WithValueAsNumber } from '../withs';
import { AsComponent } from '../as';

const classes = {
    thumb: 'h-6 w-6 border-2 border-current -mt-2 -ml-3',
    track: 'h-2',
    rail: 'h-2',
    valueLabel: '-left-2/4 ml-1',
};

export function Slider({ className, color, defaultValue, max, min, onChange, value }: SliderProps) {
    return (
        <MuiSlider
            aria-label={'slider'}
            classes={classes}
            defaultValue={defaultValue}
            max={max}
            min={min}
            onChange={onChange}
            value={value}
            valueLabelDisplay={'on'}
            className={clsx(boxClass({ color, variant: 'filled' }), 'bg-transparent mt-12', className)}
        />
    );
}

export interface SliderProps
    extends AsComponent,
        WithColorOfBox,
        WithValueAsNumber,
        WithMin,
        WithMax,
        WithValueAsNumber,
        WithDefaultValueAsNumber {
    onChange?: (event: ChangeEvent<any>, value: number | number[]) => void;
}

// noinspection JSUnusedGlobalSymbols
export default Slider;
