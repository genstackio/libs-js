import { useMemo } from 'react';
import { def_keys_builder, dynamic_page_body_item_config } from '../types';
import { WithChildren, WithItems, WithLocale, WithType } from '../withs';
import useModulesList from '../hooks/useModulesList';
import inferLayout from '../utils/inferLayout';
import useTypeModulesPageCustomizations from '../hooks/useTypeModulesPageCustomizations';
import cleanModuleTypes from '../utils/cleanModuleTypes';
import mergeModuleConfigs from '../utils/mergeModuleConfigs';
import defSelector from '../utils/defSelector';
import { deepMerge } from '@genstackio/deep';
import useModuleLayoutsContext from '../hooks/useModuleLayoutsContext';
import useModuleAliasesContext from '../hooks/useModuleAliasesContext';

const defaultDefaultModules = {};
const defaultPageLayouts = {
    page: 'column',
    email: 'standard',
    default: 'column',
};
const defaultItems = [];

export function TypeModules({
    children,
    defaultModules = defaultDefaultModules,
    doc,
    items = defaultItems,
    locale,
    page,
    templateModules = {},
    type,
    layout: baseBaseLayout,
    defKeysBuilder,
    metaMode = 'page',
    ...props
}: TypeModulesProps) {
    const layouts = useModuleLayoutsContext();
    const moduleAliases = useModuleAliasesContext();
    const {
        modules,
        diff,
        custom,
        layout: forcedLayout,
        params,
    } = useTypeModulesPageCustomizations(doc, page, metaMode);
    const def = useMemo(
        () => defSelector(modules, defaultModules, doc, defKeysBuilder),
        [defKeysBuilder, modules, doc?.type, doc?.permanent, defaultModules],
    );
    const {
        dsn,
        layout: baseLayout = undefined,
        params: baseParams = {},
    } = def ? ('string' === typeof def ? { dsn: def } : def) : { dsn: undefined };
    const finalParams = useMemo(
        () =>
            deepMerge(
                Object.entries(mergeModuleConfigs(baseParams, cleanModuleTypes(params, moduleAliases))).reduce(
                    (acc, [k, v]) => {
                        acc[k] = { config: v };
                        return acc;
                    },
                    {} as any,
                ),
                custom || {},
            ),
        [baseParams, params, moduleAliases],
    );
    const groups = useModulesList(dsn, diff, finalParams, moduleAliases);

    const layout = forcedLayout || baseBaseLayout || baseLayout;

    const namedGroups = useMemo(() => {
        return groups.reduce((acc, g) => {
            acc[g.type] = g;
            return acc;
        }, {} as any);
    }, [groups]);
    const defaultPageLayout = useMemo(
        () => defaultPageLayouts[metaMode || ''] || defaultPageLayouts['default'],
        [metaMode],
    );
    const layoutName = useMemo(
        () => layout || inferLayout(namedGroups, groups, defaultPageLayout),
        [groups, namedGroups, layout],
    );
    const moduleProps = useMemo(
        () => ({
            configs: {},
            [type]: doc,
            typeType: type,
            doc,
            locale,
            page,
            ...props,
        }),
        [params, type, doc, locale, items, page, props], // @warn props is changing at each render
    );
    const LayoutComp = useMemo(() => layouts[layoutName || ''] || layouts[defaultPageLayout], [layoutName]);

    return LayoutComp ? (
        <LayoutComp
            namedGroups={namedGroups}
            groups={groups}
            templateModules={templateModules}
            moduleProps={moduleProps}
        >
            {children || ''}
        </LayoutComp>
    ) : (
        <>UNKNOWN LAYOUT {layoutName}</>
    );
}

export interface TypeModulesProps
    extends WithChildren,
        WithLocale,
        WithItems<dynamic_page_body_item_config>,
        Required<WithType> {
    doc: any;
    page: string;
    templateModules?: any;
    defaultModules?: Record<string, string | { dsn: string; params: Record<string, any> }>;
    layout?: string;
    defKeysBuilder?: def_keys_builder;
    metaMode?: string;
}

export default TypeModules;
