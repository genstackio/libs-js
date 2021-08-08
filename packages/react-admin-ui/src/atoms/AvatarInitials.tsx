import clsx from 'clsx';
import Div from './Div';
import avatarSizeClass from '../mappings/avatar-sizes';
import shapeClass from '../mappings/shapes';
import getInitials from '../utils/getInitials';
import { WithName, WithShape, WithSizeOfAvatar } from '../withs';
import { AsComponent } from '../as';

export function AvatarInitials({ size, name, shape, className }: AvatarInitialsProps) {
    return (
        <Div center className={clsx(avatarSizeClass(size), shapeClass(shape), 'text-clear bg-disabled', className)}>
            {getInitials(name)}
        </Div>
    );
}

export interface AvatarInitialsProps extends AsComponent, WithSizeOfAvatar, Required<WithName>, WithShape {}

// noinspection JSUnusedGlobalSymbols
export default AvatarInitials;
