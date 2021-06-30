import clsx from 'clsx';
import { class_name } from '../types';

export function Chat({ className }: ChatProps) {
    return <div className={clsx(className)}>CHAT</div>;
}

/* eslint @typescript-eslint/no-empty-interface: 0 */
export interface ChatProps {
    className?: class_name;
}

export default Chat;
