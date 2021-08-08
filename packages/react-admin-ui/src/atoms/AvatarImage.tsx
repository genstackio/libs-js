import clsx from 'clsx';
import Image from './Image';
import avatarSizeClass from '../mappings/avatar-sizes';
import shapeClass from '../mappings/shapes';
import { WithImage, WithShape, WithSizeOfAvatar } from '../withs';
import { AsComponent } from '../as';

export function AvatarImage({ image, size, shape, className }: AvatarImageProps) {
    return <Image {...image} className={clsx(avatarSizeClass(size), shapeClass(shape), className)} />;
}

export interface AvatarImageProps extends AsComponent, WithSizeOfAvatar, WithImage, WithShape {}

// noinspection JSUnusedGlobalSymbols
export default AvatarImage;
