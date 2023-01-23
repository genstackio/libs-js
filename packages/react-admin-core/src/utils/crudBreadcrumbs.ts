import crudTypeBreadcrumbs from './crudTypeBreadcrumbs';

export function crudBreadcrumbs(types: any, ctx: { t: Function; history: any; id?: string; parentId?: string }) {
    return Object.entries(types || {}).reduce(
        (acc, [k, v]: [string, any]) => Object.assign(acc, crudTypeBreadcrumbs(k, v)(ctx)),
        {} as any,
    );
}

export default crudBreadcrumbs;
