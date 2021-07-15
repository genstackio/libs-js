import { WithClassName } from '../../withs';

export function TasksBlock({ className }: TasksBlockProps) {
    return <div className={className}>TASKS BLOCK</div>;
}

export type TasksBlockProps = WithClassName;

// noinspection JSUnusedGlobalSymbols
export default TasksBlock;
