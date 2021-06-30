import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import { progress_variant } from '../mappings/progress-variants';
import clsx from 'clsx';
import { class_name } from '../types';

const variants = {
    circular: CircularProgress,
    linear: LinearProgress,
    default: LinearProgress,
};

export function Progress({ className, value = 0, variant = 'linear' }: ProgressProps) {
    const Component = variants[variant || 'default'] || variants.default;
    return <Component value={value} className={clsx(className)} />;
}

export interface ProgressProps {
    className?: class_name;
    value?: number;
    variant?: progress_variant;
}

export default Progress;
