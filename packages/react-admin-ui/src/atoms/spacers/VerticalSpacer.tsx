import { useMemo } from 'react';
import { AsComponent } from '../../as';
import { WithSizeOfSpacer } from '../../withs';

export function VerticalSpacer({ className, size = 1, unitSize = 4 }: VerticalSpacerProps) {
    const styles = useMemo(
        () => ({ display: 'inline-block', width: size * unitSize, height: '100%' }),
        [size, unitSize],
    );

    return <div style={styles} className={className} />;
}

export interface VerticalSpacerProps extends AsComponent, WithSizeOfSpacer {}

// noinspection JSUnusedGlobalSymbols
export default VerticalSpacer;
