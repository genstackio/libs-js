import clsx from 'clsx';
import { WithStatusOfBuddy } from '../withs';
import statusClass from '../mappings/statuses';
import { AsComponent } from '../as';

export function BuddyStatus({ status, className }: BuddyStatusProps) {
    return (
        <div
            className={clsx(
                statusClass(status),
                'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-1 border-clear',
                className,
            )}
        />
    );
}

export interface BuddyStatusProps extends AsComponent, WithStatusOfBuddy {}

// noinspection JSUnusedGlobalSymbols
export default BuddyStatus;
