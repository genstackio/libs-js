import clsx from 'clsx';
import { WithClassName } from '../withs';

export function Chat({ className }: ChatProps) {
    return <div className={clsx(className)}>CHAT</div>;
}

export type ChatProps = WithClassName;

export default Chat;
