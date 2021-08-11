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
import useHeadingText from '../hooks/useHeadingText';

export function Avatar({ className, image, name, size, shape = 'circular', status, color, ...props }: AvatarProps) {
    const [htProps, , hasContent] = useHeadingText(props, { color, className: 'pl-4', variant: 'xxsmall' });
    return (
        <Div
            center
            relative={!!status}
            className={clsx(className, !hasContent && 'inline-block', hasContent && 'inline-flex')}
        >
            {!image && <AvatarInitials size={size} shape={shape} name={name} />}
            <AvatarImage size={size} shape={shape} image={image} />
            {status && <BuddyStatus status={status} />}
            <HeadingText {...htProps} />
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
