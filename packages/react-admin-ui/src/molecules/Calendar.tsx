import clsx from 'clsx';
import { WithClassName } from '../withs';

export function Calendar({ className }: CalendarProps) {
    return <div className={clsx(className)}>CALENDAR</div>;
}

export type CalendarProps = WithClassName;

export default Calendar;
