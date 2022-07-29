export function computeYearWeekFromTimestamp(v: number): string {
    const date = new Date(v);
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    const w = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);

    const date2 = new Date(v);
    date2.setDate(date2.getDate() + 3 - (date2.getDay() + 6) % 7);
    const y = date2.getFullYear();

    return `${y}-W${w}`;
}

export default computeYearWeekFromTimestamp;
