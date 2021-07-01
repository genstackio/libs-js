import Icon from '../Icon';
import { class_name } from '../../types';
import { useToggle } from '../../hooks/useToggle';
import clsx from 'clsx';

export function NotificationToolbarItem({ className }: NotificationToolbarItemProps) {
    const [active, toggle] = useToggle();
    const color = active ? 'danger' : 'inherit';

    return (
        <Icon
            icon={'notifications_icon'}
            color={color}
            onClick={toggle}
            className={clsx('cursor-pointer', className)}
        />
    );
}

export interface NotificationToolbarItemProps {
    className?: class_name;
}

export default NotificationToolbarItem;
