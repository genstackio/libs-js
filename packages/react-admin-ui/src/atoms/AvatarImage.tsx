import clsx from 'clsx';
import Image from './Image';
import avatarSizeClass, { avatar_size } from '../mappings/avatar-sizes';
import shapeClass from '../mappings/shapes';
import { WithClassName, WithImage, WithShape } from '../withs';

export function AvatarImage({ image, size, shape, className }: AvatarImageProps) {
    return <Image {...image} className={clsx(avatarSizeClass(size), shapeClass(shape), className)} />;
}

export interface AvatarImageProps extends WithClassName, WithImage, WithShape {
    size?: avatar_size;
}

export default AvatarImage;
