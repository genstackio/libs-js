import clsx from 'clsx';
import Image from './Image';
import avatarSizeClass from '../mappings/avatar-sizes';
import { AsComponent } from '../as';
import { WithImage, WithShape, WithSizeOfAvatar } from '../withs';

export function AvatarImage({ className, image, shape, size }: AvatarImageProps) {
    return <Image shape={shape} {...image} className={clsx(avatarSizeClass(size), className)} />;
}

export interface AvatarImageProps extends AsComponent, WithSizeOfAvatar, WithImage, WithShape {}

// noinspection JSUnusedGlobalSymbols
export default AvatarImage;
