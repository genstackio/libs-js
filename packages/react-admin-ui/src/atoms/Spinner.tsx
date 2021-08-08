import { useMemo } from 'react';
import clsx from 'clsx';
import spinnerClass from '../mappings/spinners';
import { WithColorOfSpinner, WithSizeOfSpinner, WithVariantOfSpinner } from '../withs';
import { AsComponent } from '../as';

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

export interface SpinnerProps extends AsComponent, WithVariantOfSpinner, WithSizeOfSpinner, WithColorOfSpinner {}

// noinspection JSUnusedGlobalSymbols
export default Spinner;
