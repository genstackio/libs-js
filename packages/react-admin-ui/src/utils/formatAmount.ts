export function formatAmount(value, unit) {
    if ('undefined' === value) return undefined;
    if (unit) {
        switch (unit) {
            case '$':
            case '£':
                return unit + ' ' + value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            default:
                return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + ' ' + unit;
        }
    }
    return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export default formatAmount;
