import crudTypeSubtypeBreadcrumbs from './crudTypeSubtypeBreadcrumbs';

export function crudTypeBreadcrumbs(
    name: string,
    {
        plural,
        types,
        ...def
    }: {
        plural?: string;
        types?: any; // noinspection JSUnusedLocalSymbols
        [key: string]: any;
    },
) {
    const singular = name;
    plural = plural || `${name}s`;
    return (ctx: { t: Function; history: any; id?: string; parentId?: string }) => {
        const { t, id } = ctx;
        return {
            ...(def.display
                ? {
                      [singular]: [
                          { label: t('screen_home_label'), target: '/' },
                          { label: t(`screen_${plural}_label`), target: `/${plural}` },
                          (doc: any) => ({
                              label: t(`screen_${singular}_label`, { id: doc.name ? `${doc.name} - ${doc.code}` : '' }),
                              target: `/${plural}/${id}`,
                          }),
                      ],
                  }
                : {}),
            ...(def.new
                ? {
                      [`${singular}_new`]: [
                          { label: t('screen_home_label'), target: '/' },
                          { label: t(`screen_${plural}_label`), target: `/${plural}` },
                          { label: t(`screen_${singular}_new_label`), target: `/${singular}/new` },
                      ],
                  }
                : {}),
            ...(def.list
                ? {
                      [plural as string]: [
                          { label: t('screen_home_label'), target: '/' },
                          { label: t(`screen_${plural}_label`), target: `/${plural}` },
                      ],
                  }
                : {}),
            ...(def.edit
                ? {
                      [`${singular}_edit`]: [
                          { label: t('screen_home_label'), target: '/' },
                          { label: t(`screen_${plural}_label`), target: `/${plural}` },
                          { label: t(`screen_${singular}_label`), target: `/${plural}/${id}` },
                          { label: t(`screen_${singular}_edit_label`, { id: '' }), target: `/${plural}/${id}/edit` },
                      ],
                  }
                : {}),
            ...Object.entries(types || {}).reduce(
                (acc, [k, v]: [string, any]) => ({
                    ...acc,
                    ...crudTypeSubtypeBreadcrumbs(name, { plural: plural as string, ...def }, k, v)(ctx),
                }),
                {} as any,
            ),
        };
    };
}

export default crudTypeBreadcrumbs;
