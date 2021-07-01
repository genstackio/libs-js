import Icon from '../Icon';
import { class_name } from '../../types';
import { useToggle } from '../../hooks/useToggle';
import clsx from 'clsx';

export function MessageToolbarItem({ className }: MessageToolbarItemProps) {
    const [active, toggle] = useToggle();
    const color = active ? 'primary' : 'inherit';

    return (
        <Icon
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
