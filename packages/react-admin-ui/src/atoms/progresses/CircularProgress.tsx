import clsx from 'clsx';
import MuiCircularProgress from '@material-ui/core/CircularProgress';
import { WithValueAsNumber } from '../../withs';
import { AsComponent } from '../../as';

export function CircularProgress({ className, value = 0 }: CircularProgressProps) {
    return (
        <div className={clsx('relative inline-flex', className)}>
            <MuiCircularProgress variant={'determinate'} value={value} color={'inherit'} size={75} thickness={5} />
            {value && (
                <div className={'absolute inset-0 flex justify-center items-center font-semibold'}>
                    {value.toString() + '%'}
                </div>
            )}
        </div>
    );
}

export interface CircularProgressProps extends AsComponent, WithValueAsNumber {}

// noinspection JSUnusedGlobalSymbols
export default CircularProgress;
