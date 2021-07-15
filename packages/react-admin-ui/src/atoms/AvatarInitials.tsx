import clsx from 'clsx';
import Div from './Div';
import avatarSizeClass, { avatar_size } from '../mappings/avatar-sizes';
import shapeClass from '../mappings/shapes';
import getInitials from '../utils/getInitials';
import { WithClassName, WithName, WithShape } from '../withs';

export function AvatarInitials({ size, name, shape, className }: AvatarInitialsProps) {
    return (
        <Div center className={clsx(avatarSizeClass(size), shapeClass(shape), 'text-clear bg-disabled', className)}>
            {getInitials(name)}
        </Div>
    );
}

export interface AvatarInitialsProps extends WithClassName, WithName, WithShape {
    size?: avatar_size;
}

export default AvatarInitials;
