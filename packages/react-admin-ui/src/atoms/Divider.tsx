import clsx from 'clsx';
import { size, class_name } from '../types';
import { box_color } from '../mappings/box-colors';
import boxClass from '../utils/boxClass';
import { box_variant } from '../mappings/box-variants';

const sizes = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-6',
    default: 'h-1',
};

export function Divider({ className, size, color, variant = 'contained' }: DividerProps) {
    return (
        <hr className={clsx(boxClass({ color, variant }), sizes[size || 'default'] || sizes['default'], className)} />
    );
}

export interface DividerProps {
    className?: class_name;
    color?: box_color;
    variant?: box_variant;
    size?: size;
}

export default Divider;
