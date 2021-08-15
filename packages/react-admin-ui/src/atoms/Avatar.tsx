import Div from './Div';
import AvatarImage from './AvatarImage';
import BuddyStatus from '../nucleons/BuddyStatus';
import AvatarInitials from './AvatarInitials';
import HeadingText from './HeadingText';
import useHeadingText from '../hooks/useHeadingText';
import { AsComponent } from '../as';
import {
    WithName,
    WithImage,
    WithShape,
    WithStatusOfBuddy,
    WithSizeOfAvatar,
    WithHeadingText,
    WithColorOfText,
} from '../withs';

export function Avatar({ className, color, image, name, shape = 'circular', size, status, ...props }: AvatarProps) {
    const [htProps, , hasContent] = useHeadingText(props, { color, variant: 'xxsmall' });

    return (
        <Div center flex={hasContent} inline relative={!!status} className={className}>
            {!image && <AvatarInitials shape={shape} size={size} name={name} />}
            <AvatarImage image={image} shape={shape} size={size} />
            {!!status && <BuddyStatus status={status} />}
            <HeadingText pl={'md'} {...htProps} />
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
