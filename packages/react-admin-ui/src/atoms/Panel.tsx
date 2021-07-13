import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import Row from './Row';
import { WithClassName, WithChildren, WithBox } from '../withs';

export function Panel({ className, children, color = 'primary', variant = 'contained' }: PanelProps) {
    return (
        <Row center className={clsx(boxClass({ color, variant }), 'p-4 leading-normal justify-between', className)}>
            {children || ''}
        </Row>
    );
}

export interface PanelProps extends WithClassName, WithChildren, WithBox {}

export default Panel;
