import { avatar_size } from '../mappings/avatar-sizes';
import Div from './Div';
import AvatarImage from './AvatarImage';
import BuddyStatus from '../nucleons/BuddyStatus';
import AvatarInitials from './AvatarInitials';
import { WithClassName, WithName, WithImage, WithShape, WithBuddyStatus } from '../withs';

export function Avatar({ className, image, name, size, shape = 'circular', status }: AvatarProps) {
    return (
        <Div inline relative={!!status} className={className}>
            {!image && <AvatarInitials size={size} shape={shape} name={name} />}
            {image && <AvatarImage size={size} shape={shape} image={image} />}
            {status && <BuddyStatus status={status} />}
        </Div>
    );
}

export interface AvatarProps extends WithClassName, WithName, WithImage, WithShape, WithBuddyStatus {
    size?: avatar_size;
}

export default Avatar;
