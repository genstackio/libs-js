import { avatar_size } from '../mappings/avatar-sizes';
import Div from './Div';
import Text from './Text';
import AvatarImage from './AvatarImage';
import BuddyStatus from '../nucleons/BuddyStatus';
import AvatarInitials from './AvatarInitials';
import { WithClassName, WithName, WithImage, WithShape, WithBuddyStatus, WithTitle, WithSubtitle } from '../withs';
import clsx from 'clsx';

export function Avatar({ className, image, name, size, shape = 'circular', status, title, subtitle }: AvatarProps) {
    const hasTitleOrSubtitle = !!title || !!subtitle;
    return (
        <Div
            center
            relative={!!status}
            className={clsx(className, !hasTitleOrSubtitle && 'inline-block', hasTitleOrSubtitle && 'inline-flex')}
        >
            {!image && <AvatarInitials size={size} shape={shape} name={name} />}
            {image && <AvatarImage size={size} shape={shape} image={image} />}
            {status && <BuddyStatus status={status} />}
            {hasTitleOrSubtitle && (
                <div className={'pl-4'}>
                    {!!title && <Text text={title} variant={'title6'} />}
                    {!!subtitle && <Text text={subtitle} variant={'overline'} />}
                </div>
            )}
        </Div>
    );
}

export interface AvatarProps
    extends WithClassName,
        Required<WithName>,
        WithImage,
        WithShape,
        WithBuddyStatus,
        WithTitle,
        WithSubtitle {
    size?: avatar_size;
}

export default Avatar;
