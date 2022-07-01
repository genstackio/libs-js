import crudBreadcrumbs from "./crudBreadcrumbs";

export function buildBreadcrumbs(types: any, forced: (({t}: {t: Function}) => any)|undefined = undefined) {
    return (name: string, ctx: {t: Function, history: any, id?: string, parentId?: string}): any[] => {
        const {t} = ctx;

        const map = {
            ...crudBreadcrumbs(types, ctx),
            default: [
                {label: t('screen_home_label'), target: '/'},
            ],
            ...((forced ? forced(ctx) : undefined) || {}),
        };
        return map[name] || map['default'];
    }
}

export default buildBreadcrumbs;
