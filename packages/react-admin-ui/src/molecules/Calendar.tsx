import { WithClassName } from '../withs';

export function Calendar({ className }: CalendarProps) {
    return <div className={className}>CALENDAR</div>;
}

export type CalendarProps = WithClassName;

export default Calendar;
