export const boolean = () => ({ test: (v) => 'boolean' === typeof v, message: (v) => `Not a boolean (actual: ${v})` });
export const ipv4 = () =>
    match({ pattern: '^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$', message: 'Not a valid IP v4 address' });
export const even = () => ({ test: (v) => 0 === v % 2, message: (v) => `Even number expected (${v})` });
export const odd = () => ({ test: (v) => 1 === v % 2, message: (v) => `Odd number expected (${v})` });
export const min = ({ value: x }) => ({ test: (v) => v >= x, message: (v) => `Min not satisfied (${v} < ${x})` });
export const max = ({ value: x }) => ({ test: (v) => v <= x, message: (v) => `Max not satisfied (${v} > ${x})` });
export const integer = () => ({ test: Number.isInteger, message: (v) => `Must be an integer (actual: ${v})` });
export const positive = () => ({ test: (v) => v >= 0, message: (v) => `Must be positive (actual: ${v})` });
export const negative = () => ({ test: (v) => v <= 0, message: (v) => `Must be negative (actual: ${v})` });
export const year = ({ min = 1800, max = 2100 }) => ({
    test: (v) => v >= min && v <= max,
    message: (v) => `Year must be >= ${min} and <= ${max} (actual: ${v})`,
});
export const range = ({ min, max }) => ({
    test: (v) => v >= min && v <= max,
    message: (v) => `Value must be >= ${min} and <= ${max} (actual: ${v})`,
});
export const minLength = ({ min: x }) => ({
    test: (v) => v.length >= x,
    message: (v) => `Min length not satisfied (${v.length} < ${x})`,
});
export const maxLength = ({ max: x }) => ({
    test: (v) => v.length <= x,
    message: (v) => `Max length exceeded (${v.length} > ${x})`,
});
export const values = ({ values: x }) => ({
    test: (v) => !!x.find((a) => a === v),
    message: (v) => `Value not allowed (actual: ${v}, allowed: ${x.join(',')})`,
});
export const match = ({
    pattern,
    flags = undefined,
    message = undefined,
}: {
    pattern: string;
    flags?: any;
    message: string | undefined;
}) => ({
    test: (v) => new RegExp(pattern, flags).test(v),
    message: (v) => (message ? (<any>message).replace('{{v}}', v) : `Malformed (actual: ${v}, expected: ${pattern})`),
});
export const hasUpperLetter = () => match({ pattern: '[A-Z]+', message: 'At least one upper case letter is required' });
export const hasLowerLetter = () => match({ pattern: '[a-z]+', message: 'At least one lower case letter is required' });
export const hasDigit = () => match({ pattern: '[0-9]+', message: 'At least one digit is required' });
export const hasSpecialChar = () =>
    match({ pattern: '[!:$@&%()\\[\\];,/]+', message: 'At least one special character is required' });
export const email = () => match({ pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s.]+$', message: 'Not a valid email' });
export const phone = () => match({ pattern: '^[0-9\\-\\+]+$', message: 'Not a valid phone' });
export const uuid = () =>
    match({
        pattern: '^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$',
        flags: 'i',
        message: `Not a valid uuid (actual: {{v}}, expected: v4 format)`,
    });
export const url = () => match({ pattern: '^http[s]?://.+$', flags: 'i', message: `Not a valid URL` });
export const arn = () => match({ pattern: '^arn:[^:]*:[^:]*:[^:]*:[^:]*:.+$', message: `Not a valid AWS ARN` });
export const unknown = () => ({ test: () => false, message: () => `Unknown validator` });
export const visaNumber = () => ({ test: (v) => /^[0-9]+$/.test(v), message: () => 'Visa number is not valid' });
export const jsonString = () => ({ check: (v) => JSON.parse(v) });
