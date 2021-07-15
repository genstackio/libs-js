import { useMemo } from 'react';
import { space_variant } from '../types';
import { WithClassName } from '../withs';

export function Spacer({ className, variant = 'default', size = 1, unitSize = 4 }: SpacerProps) {
    const styles = useMemo(() => {
        const styles = {};
        switch (variant) {
            case 'vertical':
                styles['display'] = 'inline-block';
                styles['width'] = size * unitSize;
                styles['height'] = '100%';
                break;
            default:
            case 'default':
            case 'horizontal':
                styles['height'] = size * unitSize;
                break;
        }
        return styles;
    }, [variant, size, unitSize]);

    return <div style={styles} className={className} />;
}

export interface SpacerProps extends WithClassName {
    size?: number;
    unitSize?: number;
    variant?: space_variant;
}

export default Spacer;
