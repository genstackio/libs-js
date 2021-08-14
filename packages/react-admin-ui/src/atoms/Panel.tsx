import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import Row from './Row';
import { WithVertical } from '../withs';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { useMemo } from 'react';
import { AsBoxWrapper } from '../as';

export function Panel({ className, children, color = 'primary', variant = 'contained', vertical = false }: PanelProps) {
    const box = useMemo(() => ({ color, variant }), [color, variant]);

    return (
        <Row center className={clsx(boxClass({ color, variant }), 'p-4 leading-normal justify-between', className)}>
            <BoxProvider value={box}>
                {vertical ? <div className={'w-full'}>{children || ''}</div> : children || ''}
            </BoxProvider>
        </Row>
    );
}

export interface PanelProps extends AsBoxWrapper, WithVertical {}

// noinspection JSUnusedGlobalSymbols
export default Panel;
