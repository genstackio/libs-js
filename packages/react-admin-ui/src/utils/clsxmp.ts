import clsx from "clsx";

export function clsxmp(v: string|undefined, d: string, a: any = {}, b: any = {}) {
    return clsx(a[v || d] || a[d], b[v || d] || b[d]);
}

export default clsxmp