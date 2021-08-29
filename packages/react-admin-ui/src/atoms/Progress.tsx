import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AsComponent } from '../as';
import { WithValueAsNumber, WithVariantOfProgress } from '../withs';

const variants = {
    circular: CircularProgress,
    linear: LinearProgress,
    default: LinearProgress,
};

export function Progress({ value = 0, variant = 'linear', ...props }: ProgressProps) {
    const Component = variants[variant || 'default'] || variants.default;

    return <Component value={value} variant={'determinate'} {...props} />;
}

export interface ProgressProps extends AsComponent, WithVariantOfProgress, WithValueAsNumber {}

// noinspection JSUnusedGlobalSymbols
export default Progress;
