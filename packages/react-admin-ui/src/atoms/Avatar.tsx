import {useCallback} from 'react';
import clsx from "clsx";

const sizes = {
    'xs': 'w-8 h-8 text-xs',
    'sm': 'w-12 h-12 text-base',
    'md': 'w-16 h-16 text-3xl',
    'lg': 'w-20 h-20 text-4xl',
    'xl': 'w-24 h-24 text-5xl',
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

export function Avatar({names, image, size = 'medium', shape = 'circular', status = undefined}: AvatarProps) {
    const getInitial = useCallback(() => {
        let initials = ''
        const fullName = names.split(' ')
        fullName.forEach(element => {
            initials += element.charAt(0)
        });
        return initials.slice(0, 3).toUpperCase()
    }, [names])

    return (
        <div className={clsx('inline-block', status && 'relative')}>
            {!image && <div className={clsx(sizes[size], shapes[shape], 'text-white bg-gray-400 flex items-center justify-center')}>{getInitial()}</div>}
            {image && <img src={image.url} alt={image.alt} className={clsx(sizes[size], shapes[shape])} />}
            {status && <div className={clsx(states[status], 'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-1 border-white')} />}
        </div>
    );
}

export interface AvatarProps {
    names: string,
    image?: any,
    size?: 'small' | 'medium' | 'large',
    shape?: 'circular' | 'rounded',
    status?: 'online' | 'offline' | 'busy',
}

export default Avatar
