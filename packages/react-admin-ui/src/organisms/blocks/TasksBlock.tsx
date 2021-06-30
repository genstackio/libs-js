import clsx from 'clsx';
import { class_name } from '../../types';

export function TasksBlock({ className }: TasksBlockProps) {
    return <div className={clsx(className)}>TASKS BLOCK</div>;
}

/* eslint @typescript-eslint/no-empty-interface: 0 */
export interface TasksBlockProps {
    className?: class_name;
}

export default TasksBlock;
