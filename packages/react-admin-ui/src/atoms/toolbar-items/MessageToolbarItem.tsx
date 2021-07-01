import Icon from '../Icon';
import { class_name } from '../../types';
import { useToggle } from '../../hooks/useToggle';
import clsx from 'clsx';
import { useMessages } from '@genstackio/react-contexts';

export function MessageToolbarItem({ className }: MessageToolbarItemProps) {
    const { messages } = useMessages();
    const [active, toggle] = useToggle();
    const color = active ? 'primary' : 'inherit';

    return (
        <Icon
            count={messages.length}
            icon={'chat_bubble_outline'}
            color={color}
            onClick={toggle}
            className={clsx('flex cursor-pointer', className)}
        />
    );
}

export interface MessageToolbarItemProps {
    className?: class_name;
}

export default MessageToolbarItem;
