import clsx from 'clsx';
import Div from '../atoms/Div';
import statusClass from '../mappings/statuses';
import { AsComponent } from '../as';
import { WithStatusOfBuddy } from '../withs';

export function BuddyStatus({ className, status }: BuddyStatusProps) {
    return (
        <Div
            absolute
            className={clsx(
                statusClass(status),
                'bottom-0 right-0 w-1/4 h-1/4 rounded-full border-1 border-clear',
                className,
            )}
        />
    );
}

export interface BuddyStatusProps extends AsComponent, WithStatusOfBuddy {}

// noinspection JSUnusedGlobalSymbols
export default BuddyStatus;
