import computeYearWeekFromTimestamp from "./computeYearWeekFromTimestamp";

export function convertToDateInput(v: any, type: string = 'date') {
    if (!v) return v;

    switch (type) {
        case 'week': return computeYearWeekFromTimestamp(v);
        case 'month': return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 7);
        case 'date': return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 10);
        case 'datetime-local': return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 19);
        default: return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 19);
    }
}

export default convertToDateInput;
