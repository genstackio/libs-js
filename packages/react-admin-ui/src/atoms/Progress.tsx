import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import { WithValueAsNumber, WithVariantOfProgress } from '../withs';
import { AsComponent } from '../as';

const variants = {
    circular: CircularProgress,
    linear: LinearProgress,
    default: LinearProgress,
};

export function Progress({ className, value = 0, variant = 'linear' }: ProgressProps) {
    const Component = variants[variant || 'default'] || variants.default;
    return <Component variant={'determinate'} value={value} className={className} />;
}

export interface ProgressProps extends AsComponent, WithVariantOfProgress, WithValueAsNumber {}

// noinspection JSUnusedGlobalSymbols
export default Progress;
