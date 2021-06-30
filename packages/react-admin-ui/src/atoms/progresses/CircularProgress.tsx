import MuiCircularProgress from '@material-ui/core/CircularProgress';
import { class_name } from '../../types';
import clsx from 'clsx';

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

export interface CircularProgressProps {
    className?: class_name;
    value?: number;
}

export default CircularProgress;
