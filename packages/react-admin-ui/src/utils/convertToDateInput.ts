import computeYearWeekFromTimestamp from './computeYearWeekFromTimestamp';

export function convertToDateInput(v: any, type = 'date', options: any = {}) {
    if (!v) return v;

    if (options?.nomillis) v = Math.floor(v / 1000) * 1000;
    if (options?.noseconds) v = Math.floor(v / 60000) * 60000;
    if (options?.nominutes) v = Math.floor(v / 3600000) * 3600000;
    if (options?.nohours) v = Math.floor(v / 86400000) * 86400000;

    switch (type) {
        case 'week':
            return computeYearWeekFromTimestamp(v);
        case 'month':
            return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 7);
        case 'date':
            return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 10);
        case 'datetime-local':
            return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 19);
        default:
            return new Date(v - new Date(v).getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 19);
    }
}

export default convertToDateInput;
