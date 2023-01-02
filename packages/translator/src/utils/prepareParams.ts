export function prepareParams(a: string) {
    return a
        .replace(/>/gi, () => `<X1>_</X1>`)
        .replace(/</gi, () => `<X2>_</X2>`)
        .replace(/&/gi, () => `<X3>_</X3>`)
        .replace(/©/gi, () => `<X4>_</X4>`)
        .replace(/®/gi, () => `<X5>_</X5>`)
        .replace(/(\{\{([a-z0-9_]+)}})/gi, (match, p1, p2) => `<X>${p2}</X>`)
    ;
}

export default prepareParams;
