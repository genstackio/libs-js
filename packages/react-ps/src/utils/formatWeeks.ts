export function formatWeeks(date: any) {
    return Math.round(date / (7 * 24 * 60 * 60 * 1000));
}

export default formatWeeks;
