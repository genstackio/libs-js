import clsx from 'clsx';
import { WithClassName } from '../../withs';

export function TasksBlock({ className }: TasksBlockProps) {
    return <div className={clsx(className)}>TASKS BLOCK</div>;
}

export type TasksBlockProps = WithClassName;

// noinspection JSUnusedGlobalSymbols
export default TasksBlock;
