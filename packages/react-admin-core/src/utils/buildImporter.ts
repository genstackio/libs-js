import { app_importer_function, importer_context_params, importers } from '@genstackio/react-contexts';
import pathize from './pathize';
import Loadable from '@loadable/component';

const defaultImporters = {
    layout: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-core/lib/layouts/${path}Layout`)),
    screen: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-core/lib/screens/${path}Screen`)),
    form: ({ path }: { path: string }) => Loadable(() => import(`@genstackio/react-admin-core/lib/forms/${path}Form`)),
    action: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-core/lib/actions/${path}Action`)),
    form_field: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-ui/lib/atoms/fields/${path}Field`)),
    content: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-ui/lib/contents/${path}Content`)),
    screen_template: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-core/lib/templates/screens/${path}ScreenTemplate`)),
    drawer: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-core/lib/drawers/${path}Drawer`)),
    row_action: ({ path }: { path: string }) =>
        Loadable(() => import(`@genstackio/react-admin-core/lib/rowActions/${path}RowAction`)),
    misc: ({ path }: { path: string }) => Loadable(() => import(`@genstackio/react-admin-core/lib/misc/${path}`)),
};

export function buildImporter(importer?: importer_context_params, importers?: importers) {
    if (!importer) {
        if (!importers)
            return (name: string, key: string) => {
                const y = { name, path: pathize(name) };
                const x2: app_importer_function = (defaultImporters as any)[key];
                if (x2) return x2(y);
                return undefined;
            };
        return (name: string, key: string) => {
            const y = { name, path: pathize(name) };
            const zz = (importers as any)[key] || [undefined, []];
            if (!!zz && Array.isArray(zz) && zz.length >= 1) {
                const [x, names = []]: [app_importer_function, string[]] = zz as [any, any];
                if ((names.includes(name) || names.includes('*')) && x) return Loadable(() => x(y));
            }
            const x2: app_importer_function = (defaultImporters as any)[key];
            if (x2) return x2(y);
            return undefined;
        };
    } else if (!importers) {
        return importer;
    }
    return (name: string, key: string) => {
        const y = { name, path: pathize(name) };
        const zz = (importers as any)[key] || [undefined, []];
        if (!!zz && Array.isArray(zz) && zz.length >= 1) {
            const [x, names = []]: [app_importer_function, string[]] = zz as [any, any];
            if ((names.includes(name) || names.includes('*')) && x) return Loadable(() => x(y));
        }
        return importer;
    };
}

export default buildImporter;
