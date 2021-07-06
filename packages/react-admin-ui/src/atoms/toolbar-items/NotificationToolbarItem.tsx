import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function NotificationToolbarItem(props: NotificationToolbarItemProps) {
    return <ToolbarItem {...props} icon={'fa-far--bell'} activeIcon={'fa-bell'} />;
}

export type NotificationToolbarItemProps = BaseToolbarItemProps;

export default NotificationToolbarItem;
