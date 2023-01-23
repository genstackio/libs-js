import crudMenu from './crudMenu';

export function buildMenus(types: any, sections: any = {}) {
    return (name: string, ctx: { t: Function }): any[] => {
        const { t } = ctx;
        const map = {
            ...crudMenu(types, ctx, name),
        };

        return Object.entries(sections[name]).reduce((acc, [k, v]) => {
            let items = [] as any[];
            '-' !== k && items.push({ type: 'section', label: t(`menu_section_${k}_label`) });
            if (v && (v as any).items) {
                items = [...items, ...(v as any).items(ctx)];
            }
            return [...acc, ...items, ...(map[k] || [])];
        }, [] as any[]);
    };
}

// noinspection JSUnusedGlobalSymbols
export default buildMenus;
