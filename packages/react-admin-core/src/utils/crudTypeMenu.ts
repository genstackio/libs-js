export function crudTypeMenu(
    name: string,
    { plural, types, ...def }: { plural?: string; types?: any; [key: string]: any },
    ctx: { t: Function },
    menuName: string,
) {
    const singular = name;
    plural = plural || `${name}s`;
    const { t } = ctx;
    let section = '-';
    let priority = 101;
    let icon = '';
    const acc: any = {};
    if (def.menus && def.menus[menuName]) {
        section = def.menus[menuName].section || '-';
        priority = def.menus[menuName].priority;
        icon = def.menus[menuName].icon || (def.list || {}).icon || def.icon || '';
        if (def.list) {
            acc[section] = acc[section] || [];
            acc[section].push({
                type: 'item',
                target: `/${plural}`,
                activePrefix: new RegExp(`^/(${plural}$|${plural}/|${singular}/)`),
                label: t(`menu_${plural}_label`),
                icon,
                priority,
            });
        }
    }
    return acc;
}

export default crudTypeMenu;
