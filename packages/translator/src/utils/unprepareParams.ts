export function prepareParams(a: string) {
    return a
        .replace(/(<X>([a-z0-9_]+)<\/X>)/gi, (match, p1, p2) => `{{${p2}}}`)
        .replace(/(<X1>_<\/X1>)/gi, () => `>`)
        .replace(/(<X2>_<\/X2>)/gi, () => `<`)
        .replace(/(<X3>_<\/X3>)/gi, () => `&`)
        .replace(/(<X4>_<\/X4>)/gi, () => `©`)
        .replace(/(<X5>_<\/X5>)/gi, () => `®`)
    ;
}

export default prepareParams;
