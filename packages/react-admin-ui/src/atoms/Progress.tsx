import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import { WithClassName, WithVariantOfProgress } from '../withs';

const variants = {
    circular: CircularProgress,
    linear: LinearProgress,
    default: LinearProgress,
};

export function Progress({ className, value = 0, variant = 'linear' }: ProgressProps) {
    const Component = variants[variant || 'default'] || variants.default;
    return <Component variant={'determinate'} value={value} className={className} />;
}

export interface ProgressProps extends WithClassName, WithVariantOfProgress {
    value?: number;
}

export default Progress;
