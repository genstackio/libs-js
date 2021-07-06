import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { children, class_name } from '../types';
import { box_color } from '../mappings/box-colors';
import { box_variant } from '../mappings/box-variants';
import Row from './Row';

export function Panel({ className, children, color = 'primary', variant = 'contained' }: PanelProps) {
    return (
        <Row center className={clsx(boxClass({ color, variant }), 'p-4 leading-normal justify-between', className)}>
            {children || ''}
        </Row>
    );
}

export interface PanelProps {
    className?: class_name;
    children?: children;
    color?: box_color;
    variant?: box_variant;
}

export default Panel;
