import Div from './Div';
import AvatarImage from './AvatarImage';
import BuddyStatus from '../nucleons/BuddyStatus';
import AvatarInitials from './AvatarInitials';
import {
    WithName,
    WithImage,
    WithShape,
    WithStatusOfBuddy,
    WithSizeOfAvatar,
    WithHeadingText,
    WithColorOfText,
} from '../withs';
import clsx from 'clsx';
import { AsComponent } from '../as';
import HeadingText from './HeadingText';

export function Avatar({
    className,
    image,
    name,
    size,
    shape = 'circular',
    status,
    title,
    subtitle,
    center,
    color,
}: AvatarProps) {
    const hasTitleOrSubtitle = !!title || !!subtitle;
    return (
        <Div
            center
            relative={!!status}
            className={clsx(className, !hasTitleOrSubtitle && 'inline-block', hasTitleOrSubtitle && 'inline-flex')}
        >
            {!image && <AvatarInitials size={size} shape={shape} name={name} />}
            <AvatarImage size={size} shape={shape} image={image} />
            {status && <BuddyStatus status={status} />}
            <HeadingText
                title={title}
                subtitle={subtitle}
                variant={'xxsmall'}
                color={color}
                center={center}
                className={'pl-4'}
            />
        </Div>
    );
}

export interface AvatarProps
    extends AsComponent,
        Required<WithName>,
        WithHeadingText,
        WithColorOfText,
        WithImage,
        WithShape,
        WithStatusOfBuddy,
        WithSizeOfAvatar {}

// noinspection JSUnusedGlobalSymbols
export default Avatar;
