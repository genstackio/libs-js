import clsx from 'clsx';
import spinnerClass, { spinner_variant, spinner_size, spinner_color } from '../mappings/spinners';
import { useMemo } from 'react';
import { class_name } from '../types';

export function Spinner({ className, variant = 'half-circle', size = 'md', color = 'primary' }: SpinnerProps) {
    const isSpin = 'dots' !== variant && 'squares' !== variant;
    const def = useMemo(() => ({ variant, size, color }), [variant, size, color]);
    const computedClassName = useMemo(() => spinnerClass(def), [def]);
    return (
        <div>
            {isSpin && <div className={clsx('rounded-full animate-spin', computedClassName, className)} />}
            {!isSpin && (
                <div className={clsx('flex space-x-1', className)}>
                    <div className={clsx(computedClassName, 'animate-bounce')} />
                    <div className={clsx(computedClassName, 'animate-bounce200')} />
                    <div className={clsx(computedClassName, 'animate-bounce400')} />
                </div>
            )}
        </div>
    );
}

export interface SpinnerProps {
    className?: class_name;
    variant?: spinner_variant;
    size?: spinner_size;
    color?: spinner_color;
}

export default Spinner;
