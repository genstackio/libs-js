import clsx from 'clsx';
import Image from './Image';
import avatarSizeClass from '../mappings/avatar-sizes';
import shapeClass from '../mappings/shapes';
import { WithClassName, WithImage, WithShape, WithSizeOfAvatar } from '../withs';

export function AvatarImage({ image, size, shape, className }: AvatarImageProps) {
    return <Image {...image} className={clsx(avatarSizeClass(size), shapeClass(shape), className)} />;
}

export interface AvatarImageProps extends WithClassName, WithSizeOfAvatar, WithImage, WithShape {}

export default AvatarImage;
