import clsx from 'clsx';
import { WithBuddyStatus, WithClassName } from '../withs';
import statusClass from '../mappings/statuses';

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

export interface BuddyStatusProps extends WithClassName, WithBuddyStatus {}

export default BuddyStatus;
