import { useMemo } from 'react';
import { WithSizeOfSpacer, WithVariantOfSpace } from '../withs';
import { AsComponent } from '../as';

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

export interface SpacerProps extends AsComponent, WithVariantOfSpace, WithSizeOfSpacer {}

// noinspection JSUnusedGlobalSymbols
export default Spacer;
