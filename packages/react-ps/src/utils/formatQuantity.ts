export function formatQuantityString(quantity: number, suffixIfOneOrLess: string, suffixIfMoreThanOne: string) {
    if (quantity > 1) {
        return `${quantity} ${suffixIfMoreThanOne}`;
    }
    return `${quantity} ${suffixIfOneOrLess}`;
}

export default formatQuantityString;
