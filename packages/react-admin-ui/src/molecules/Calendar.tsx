import clsx from 'clsx';
import { class_name } from '../types';

export function Calendar({ className }: CalendarProps) {
    return <div className={clsx(className)}>CALENDAR</div>;
}

/* eslint @typescript-eslint/no-empty-interface: 0 */
export interface CalendarProps {
    className?: class_name;
}

export default Calendar;
