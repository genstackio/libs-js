import clsx from 'clsx';
import { class_name } from '../types';
import getInitials from '../utils/getInitials';
import statusClass, { status } from '../mappings/statuses';
import shapeClass from '../mappings/shapes';
import Image from './Image';
import avatarSizeClass, { avatar_size } from '../mappings/avatar-sizes';
import { WithClassName, WithName, WithImage, WithShape } from '../withs';

export function Avatar({
    className,
    initialsClassName,
    imageClassName,
    statusClassName,
    image,
    name,
    size,
    shape = 'circular',
    status = undefined,
}: AvatarProps) {
    return (
        <div className={clsx('inline-block', status && 'relative', className)}>
            {!image && (
                <div
                    className={clsx(
                        avatarSizeClass(size),
                        shapeClass(shape),
                        'text-clear bg-disabled flex items-center justify-center',
                        initialsClassName,
                    )}
                >
                    {getInitials(name)}
                </div>
            )}
            {image && <Image {...image} className={clsx(avatarSizeClass(size), shapeClass(shape), imageClassName)} />}
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

export interface AvatarProps extends WithClassName, WithName, WithImage, WithShape {
    initialsClassName?: class_name;
    imageClassName?: class_name;
    statusClassName?: class_name;
    size?: avatar_size;
    status?: status;
}

export default Avatar;
