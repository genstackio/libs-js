import clsx from 'clsx';
import { image, size } from '../types';
import getInitials from '../utils/getInitials';
import statusClass, { status } from '../mappings/statuses';
import shapeClass, { shape } from '../mappings/shapes';
import Image from './Image';

const sizes = {
    xs: 'w-8 h-8 text-xs',
    sm: 'w-12 h-12 text-base',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-20 h-20 text-4xl',
    xl: 'w-24 h-24 text-5xl',
};

export function Avatar({ image, name, size = 'md', shape = 'circular', status = undefined }: AvatarProps) {
    return (
        <div className={clsx('inline-block', status && 'relative')}>
            {!image && (
                <div
                    className={clsx(
                        sizes[size],
                        shapeClass(shape),
                        'text-white bg-gray-400 flex items-center justify-center',
                    )}
                >
                    {getInitials(name)}
                </div>
            )}
            {image && <Image {...image} className={clsx(sizes[size], shapeClass(shape))} />}
            {status && (
                <div
                    className={clsx(
                        statusClass(status),
                        'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-1 border-white',
                    )}
                />
            )}
        </div>
    );
}

export interface AvatarProps {
    name: string;
    image?: image;
    size?: size;
    shape?: shape;
    status?: status;
}

export default Avatar;
