import { class_name } from '../types';
import clsx from 'clsx';

export function Calendar({ className }: CalendarProps) {
    return <div className={clsx(className)}>CALENDAR</div>;
}

/* eslint @typescript-eslint/no-empty-interface: 0 */
export interface CalendarProps {
    className?: class_name;
}

export default Calendar;
