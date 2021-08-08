import clsx from 'clsx';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import MuiLinearProgress from '@material-ui/core/LinearProgress';
import { WithValueAsNumber } from '../../withs';
import { AsComponent } from '../../as';

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: 'var(--primary-color)',
        },
    }),
)(MuiLinearProgress);

export function LinearProgress({ className, value = 0 }: LinearProgressProps) {
    return (
        <div className={clsx('flex-grow', className)}>
            <BorderLinearProgress variant={'determinate'} value={value} />
        </div>
    );
}

export interface LinearProgressProps extends AsComponent, WithValueAsNumber {}

// noinspection JSUnusedGlobalSymbols
export default LinearProgress;
