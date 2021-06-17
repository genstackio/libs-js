import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import {progress_variant} from '../mappings/progress-variants';

const variants = {
    circular: CircularProgress,
    linear: LinearProgress,
    default: LinearProgress,
};

export function Progress({value = 0, variant = 'linear'}: ProgressProps) {
    const Component = variants[variant || 'default'] || variants.default;
    return <Component value={value} />;
}

export interface ProgressProps {
    value?: number,
    variant?: progress_variant,
}

export default Progress