import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';
import useMessages from '@genstackio/react-contexts/lib/hooks/useMessages';

export function MessageToolbarItem(props: MessageToolbarItemProps) {
    const { messages } = useMessages();

    return (
        <ToolbarItem {...props} activeIcon={'fa-comment-alt'} count={messages.length} icon={'fa-far--comment-alt'} />
    );
}

export type MessageToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default MessageToolbarItem;
