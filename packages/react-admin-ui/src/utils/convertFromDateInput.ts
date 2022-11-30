export function convertFromDateInput(v: any, type: string = 'date') {
    if (!v) return v;

    const currentTimezone = new Date().getTimezoneOffset();

    switch (type) {
        case 'week': return new Date(v).getTime();
        case 'month': return new Date(v).getTime();
        case 'date': return new Date(v).getTime();
        case 'datetime-local': return new Date(v).getTime() + currentTimezone;
        default: return new Date(v).getTime() + currentTimezone;
    }
}

export default convertFromDateInput;
