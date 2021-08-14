import clsx from 'clsx';
import Div from './Div';
import avatarSizeClass from '../mappings/avatar-sizes';
import shapeClass from '../mappings/shapes';
import useInitials from '../hooks/useInitials';
import { WithName, WithShape, WithSizeOfAvatar } from '../withs';
import { AsComponent } from '../as';

export function AvatarInitials({ size, name, shape, className }: AvatarInitialsProps) {
    const initials = useInitials(name);
    return (
        <Div center className={clsx(avatarSizeClass(size), shapeClass(shape), 'text-clear bg-disabled', className)}>
            {initials}
        </Div>
    );
}

export interface AvatarInitialsProps extends AsComponent, WithSizeOfAvatar, Required<WithName>, WithShape {}

// noinspection JSUnusedGlobalSymbols
export default AvatarInitials;
