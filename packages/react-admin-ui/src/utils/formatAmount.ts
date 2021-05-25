export function formatAmount(value, unit) {
    if (unit) {
        switch (unit) {
            case '€':
            case 'M':
                return (value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + unit);
            default:
                return (unit + ' ' + value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,'));
        }
    }
    return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export default formatAmount