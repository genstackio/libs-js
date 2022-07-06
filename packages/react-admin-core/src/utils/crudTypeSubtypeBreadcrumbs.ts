export function crudTypeSubtypeBreadcrumbs(parentName: string, {plural: parentPlural}: {plural: string}, name: string, {plural, ...def}: {plural?: string, [key: string]: any}) {
    const parentSingular = parentName;
    const singular = name;
    plural = plural || `${name}s`;
    return (ctx: {t: Function, history: any, id?: string, parentId?: string}) => {
        const {t, id, parentId} = ctx;
        return ({
            ...(def.list ? {[`${parentSingular}__${plural}`]: [
                {label: t('screen_home_label'), target: '/'},
                {label: t(`screen_${parentPlural}_label`), target: `/${parentPlural}`},
                {label: t(`screen_${parentSingular}_label`, {id: id}), target: `/${parentPlural}/${parentId}`},
                {label: t(`screen_${plural}_label`), target: `/${parentPlural}/${parentId}/${plural}`},
            ]} : {}),
            ...(def.display ? {[`${parentSingular}__${singular}`]: [
                {label: t('screen_home_label'), target: '/'},
                {label: t(`screen_${parentPlural}_label`), target: `/${parentPlural}`},
                {label: t(`screen_${parentSingular}_label`, {id: id}), target: `/${parentPlural}/${parentId}`},
                {label: t(`screen_${plural}_label`), target: `/${parentPlural}/${parentId}/${plural}`},
                {label: t(`screen_${singular}_label`, {id: id}), target: `/${parentPlural}/${parentId}/${plural}/${id}`},
            ]} : {}),
        });
    };
}

export default crudTypeSubtypeBreadcrumbs;
