import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import MuiLinearProgress from '@material-ui/core/LinearProgress';
import { class_name } from '../../types';
import clsx from 'clsx';

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

export interface LinearProgressProps {
    className?: class_name;
    value?: number;
}

export default LinearProgress;
