import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import Row from './Row';
import { WithClassName, WithChildren, WithBox, WithVertical } from '../withs';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { useMemo } from 'react';

export function Panel({ className, children, color = 'primary', variant = 'contained', vertical = false }: PanelProps) {
    const box = useMemo(() => ({ color, variant }), [color, variant]);
    children = vertical ? <div className={'w-full'}>{children || ''}</div> : children;

    return (
        <Row center className={clsx(boxClass({ color, variant }), 'p-4 leading-normal justify-between', className)}>
            <BoxProvider value={box}>{children || ''}</BoxProvider>
        </Row>
    );
}

export interface PanelProps extends WithClassName, WithChildren, WithBox, WithVertical {}

export default Panel;
