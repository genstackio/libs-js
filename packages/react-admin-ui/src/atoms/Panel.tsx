import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { children, class_name } from '../types';
import { box_color } from '../mappings/box-colors';
import { box_variant } from '../mappings/box-variants';

export function Panel({ className, children, color = 'primary', variant = 'contained' }: PanelProps) {
    return (
        <div
            className={clsx(
                boxClass({ color, variant }),
                'px-4 py-4 leading-normal flex items-center justify-between',
                className,
            )}
        >
            {children || ''}
        </div>
    );
}

export interface PanelProps {
    className?: class_name;
    children?: children;
    color?: box_color;
    variant?: box_variant;
}

export default Panel;
