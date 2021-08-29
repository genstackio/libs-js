import Div from '../Div';
import MuiCircularProgress from '@material-ui/core/CircularProgress';
import { AsComponent } from '../../as';
import { WithValueAsNumber } from '../../withs';

export function CircularProgress({ className, value = 0 }: CircularProgressProps) {
    return (
        <Div flex inline relative className={className}>
            <MuiCircularProgress color={'inherit'} size={75} thickness={5} value={value} variant={'determinate'} />
            {value && (
                <Div absolute center flex className={'inset-0 font-semibold'}>
                    {`${value}%`}
                </Div>
            )}
        </Div>
    );
}

export interface CircularProgressProps extends AsComponent, WithValueAsNumber {}

// noinspection JSUnusedGlobalSymbols
export default CircularProgress;
