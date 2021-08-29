import { useMemo } from 'react';
import clsx from 'clsx';
import Div from './Div';
import spinnerClass from '../mappings/spinners';
import { AsComponent } from '../as';
import { WithColorOfSpinner, WithSizeOfSpinner, WithVariantOfSpinner } from '../withs';

export function Spinner({ className, color = 'primary', size = 'md', variant = 'half-circle' }: SpinnerProps) {
    const isSpin = 'dots' !== variant && 'squares' !== variant;
    const def = useMemo(() => ({ variant, size, color }), [variant, size, color]);
    const computedClassName = useMemo(() => spinnerClass(def), [def]);

    return (
        <div>
            {isSpin && <Div corner={'circle'} className={clsx('animate-spin', computedClassName, className)} />}
            {!isSpin && (
                <Div flex spaced={1} className={className}>
                    <div className={clsx(computedClassName, 'animate-bounce')} />
                    <div className={clsx(computedClassName, 'animate-bounce200')} />
                    <div className={clsx(computedClassName, 'animate-bounce400')} />
                </Div>
            )}
        </div>
    );
}

export interface SpinnerProps extends AsComponent, WithVariantOfSpinner, WithSizeOfSpinner, WithColorOfSpinner {}

// noinspection JSUnusedGlobalSymbols
export default Spinner;
