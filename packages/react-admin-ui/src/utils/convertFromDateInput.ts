export function convertFromDateInput(v: any, type = 'date', options: any = {}) {
    if (!v) return v;

    let x = 0;

    switch (type) {
        case 'week':
            x = new Date(v).getTime();
            break;
        case 'month':
            x = new Date(v).getTime();
            break;
        case 'date':
            x = new Date(v).getTime();
            break;
        case 'datetime-local':
            x = new Date(v).getTime();
            break;
        default:
            x = new Date(v).getTime();
            break;
    }

    if (options?.nomillis) x = Math.floor(x / 1000) * 1000;
    if (options?.noseconds) x = Math.floor(x / 60000) * 60000;
    if (options?.nominutes) x = Math.floor(x / 3600000) * 3600000;
    if (options?.nohours) x = Math.floor(x / 86400000) * 86400000;

    return x;
}

export default convertFromDateInput;
