import clsx from 'clsx';
import Div from './Div';
import avatarSizeClass from '../mappings/avatar-sizes';
import useInitials from '../hooks/useInitials';
import { AsComponent } from '../as';
import { WithName, WithShape, WithSizeOfAvatar } from '../withs';

export function AvatarInitials({ className, name, shape, size }: AvatarInitialsProps) {
    const initials = useInitials(name);

    return (
        <Div flex center shape={shape} className={clsx(avatarSizeClass(size), 'text-clear bg-disabled', className)}>
            {initials}
        </Div>
    );
}

export interface AvatarInitialsProps extends AsComponent, WithSizeOfAvatar, Required<WithName>, WithShape {}

// noinspection JSUnusedGlobalSymbols
export default AvatarInitials;
