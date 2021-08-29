import { useMemo } from 'react';
import { AsComponent } from '../../as';
import { WithSizeOfSpacer } from '../../withs';

export function HorizontalSpacer({ className, size = 1, unitSize = 4 }: HorizontalSpacerProps) {
    const styles = useMemo(() => ({ height: size * unitSize }), [size, unitSize]);

    return <div style={styles} className={className} />;
}

export interface HorizontalSpacerProps extends AsComponent, WithSizeOfSpacer {}

// noinspection JSUnusedGlobalSymbols
export default HorizontalSpacer;
