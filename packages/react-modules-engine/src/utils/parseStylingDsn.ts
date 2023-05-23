export function parseStylingDsn(value: string) {
    return (
        value?.split(/\s*,\s*/g).reduce((acc: any, token: string) => {
            const [a = undefined, b = undefined]: (string | undefined)[] = token?.split('=') || [];
            a && b && (acc[a] = b);
            return acc;
        }, {}) || {}
    );
}

export default parseStylingDsn;
