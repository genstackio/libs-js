import crudTypeMenu from "./crudTypeMenu";

export function crudMenu(types: any, ctx: {t: Function}, name: string) {
    const x = Object.entries(types || {}).reduce((acc, [k, v]: [string, any]) => {
        const xx = crudTypeMenu(k, v, ctx, name);
        Object.entries(xx).reduce((acc2, [kk, vv]) => {
            acc2[kk] = (acc2[kk] || [] as any[]);
            acc2[kk] = [...acc2[kk], ...(vv as any[])];
            return acc2;
        }, acc);
        return acc;
    }, {} as any);

    return Object.entries(x).reduce((acc, [k, v]: [string, any]) => {
        v.sort((a: any, b: any) => {
            return a.priority > b.priority ? 1 : (a.priority < b.priority ? -1 : 0);
        })
        acc[k] = v;
        return acc;
    }, {} as any);
}

export default crudMenu;
