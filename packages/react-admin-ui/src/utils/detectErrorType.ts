export function detectErrorType(e: any, defaultValue = 'unknown') {
    return e?.extensions?.exception?.errorType || defaultValue;
}

export default detectErrorType;
