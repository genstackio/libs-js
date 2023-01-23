export function convertFromDateInput(v: any, type = 'date') {
    if (!v) return v;

    switch (type) {
        case 'week':
            return new Date(v).getTime();
        case 'month':
            return new Date(v).getTime();
        case 'date':
            return new Date(v).getTime();
        case 'datetime-local':
            return new Date(v).getTime();
        default:
            return new Date(v).getTime();
    }
}

export default convertFromDateInput;
