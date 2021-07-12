import clsx from 'clsx';
import { class_name, image, size } from '../types';
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

export function Avatar({
    className,
    initialsClassName,
    imageClassName,
    statusClassName,
    image,
    name,
    size = 'md',
    shape = 'circular',
    status = undefined,
}: AvatarProps) {
    return (
        <div className={clsx('inline-block', status && 'relative', className)}>
            {!image && (
                <div
                    className={clsx(
                        sizes[size],
                        shapeClass(shape),
                        'text-clear bg-disabled flex items-center justify-center',
                        initialsClassName,
                    )}
                >
                    {getInitials(name)}
                </div>
            )}
            {image && <Image {...image} className={clsx(sizes[size], shapeClass(shape), imageClassName)} />}
            {status && (
                <div
                    className={clsx(
                        statusClass(status),
                        'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-1 border-clear',
                        statusClassName,
                    )}
                />
            )}
        </div>
    );
}

export interface AvatarProps {
    className?: class_name;
    initialsClassName?: class_name;
    imageClassName?: class_name;
    statusClassName?: class_name;
    name: string;
    image?: image;
    size?: size;
    shape?: shape;
    status?: status;
}

export default Avatar;
