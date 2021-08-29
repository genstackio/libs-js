import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function NotificationToolbarItem(props: NotificationToolbarItemProps) {
    return <ToolbarItem {...props} activeIcon={'fa-bell'} icon={'fa-far--bell'} />;
}

export type NotificationToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default NotificationToolbarItem;
