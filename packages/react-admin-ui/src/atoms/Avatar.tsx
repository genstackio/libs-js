import React from 'react';
import clsx from "clsx";

const sizes = {
    'xs': 'w-8 h-8',
    'sm': 'w-12 h-12',
    'md': 'w-16 h-16',
    'lg': 'w-20 h-20',
    'xl': 'w-24 h-24',
}
const shapes = {
    'circular': 'rounded-full',
    'rounded': 'rounded-lg',
}
const states = {
    'online': 'bg-green-400',
    'offline': 'bg-gray-300',
    'busy': 'bg-red-500',
}

export function Avatar({image, size = 'medium', shape = 'circular', status = undefined}: AvatarProps) {
    return (
        <div className={clsx('inline-block', status && 'relative')}>
            <img src={image.url} alt={image.alt} className={clsx(sizes[size], shapes[shape])} />
            {status && <div className={clsx(states[status], 'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-1 border-white')} />}
        </div>
    );
}

export interface AvatarProps {
    image: any,
    size?: 'small' | 'medium' | 'large',
    shape?: 'circular' | 'rounded',
    status?: 'online' | 'offline' | 'busy',
}

export default Avatar