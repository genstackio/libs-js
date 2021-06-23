import clsx from 'clsx';
import spinnerClass, { spinner_variant, spinner_size, spinner_color } from '../mappings/spinners';
import { useMemo } from 'react';

export function Spinner({ variant = 'half-circle', size = 'md', color = 'primary' }: SpinnerProps) {
    const isSpin = 'dots' !== variant && 'squares' !== variant;
    const def = useMemo(() => ({ variant, size, color }), [variant, size, color]);
    const computedClassName = useMemo(() => spinnerClass(def), [def]);
    return (
        <div>
            {isSpin && <div className={clsx('rounded-full animate-spin', computedClassName)} />}
            {!isSpin && (
                <div className={'flex space-x-1'}>
                    <div className={clsx(computedClassName, 'animate-bounce')} />
                    <div className={clsx(computedClassName, 'animate-bounce200')} />
                    <div className={clsx(computedClassName, 'animate-bounce400')} />
                </div>
            )}
        </div>
    );
}

export interface SpinnerProps {
    variant?: spinner_variant;
    size?: spinner_size;
    color?: spinner_color;
}

export default Spinner;
