import React from 'react';
import clsx from "clsx";

const variants = {
    'full-circle': 'border border-t-4 border-warning',
    'half-circle': 'border-t-2 border-r-2 border-secondary',
    'separate-circle': 'border-t-2 border-b-2 border-dark',
    'dotted-circle': 'border-4 border-primary border-dotted',
    'dots': 'h-3 w-3 bg-danger rounded-full',
    'squares': 'h-4 w-1 bg-info',
}

const loaderType = (variant) => {
    switch(variant) {
        case 'dots':
        case 'squares':
            return false;
        default:
            return true;
    }
}

export function Spinner({variant = 'half-circle'}: SpinnerProps) {
    let isSpin = loaderType(variant)
    return (
        <div>
            {isSpin && <div className={clsx(variants[variant], 'h-20 w-20 rounded-full animate-spin')} />}
            {!isSpin && <div className='flex space-x-1'>
                <div className={clsx(variants[variant], 'animate-bounce')} />
                <div className={clsx(variants[variant], 'animate-bounce200')} />
                <div className={clsx(variants[variant], 'animate-bounce400')} />
            </div>}
        </div>
    );
}

export interface SpinnerProps {
    variant?: 'full-circle' | 'half-circle' | 'separate-circle' | 'dotted-circle' |'dots' | 'squares',
}

export default Spinner