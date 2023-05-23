import { useMemo } from 'react';
import I18nProvider from '@genstackio/react-i18n/lib/I18nProvider';
import useI18nFromLocale from '@genstackio/react-i18n/lib/hooks/use18nFromLocale';
import createI18nFactory from '@genstackio/react-i18n/lib/utils/createI18nFactory';
import args from './args';
import { CustomizationContextProvider } from '../src/contexts/CustomizationContext';
import { TemplateContextProvider } from '../src/contexts/TemplateContext';
import { ModuleLayoutsContextProvider } from '@genstackio/react-modules-engine/lib/contexts/ModuleLayoutsContext';
import { ModuleAliasesContextProvider } from '@genstackio/react-modules-engine/lib/contexts/ModuleAliasesContext';
import { ModuleGroupsContextProvider } from '@genstackio/react-modules-engine/lib/contexts/ModuleGroupsContext';
import moduleLayouts from '../src/template-layouts';
import moduleGroups from '../src/module-groups';
import { aliases as moduleAliases } from '../src/template-modules';
import { TemplatesContextProvider } from '@genstackio/react-modules-engine/lib/contexts/TemplatesContext';

function Provider({ locale = 'fr_FR', children }) {
    const i18n = useI18nFromLocale(
        locale,
        createI18nFactory({}, (l: string) => [require(`../translations/${l!.replace('-', '_')}.json`)]),
    );

    const customizationContextValue = useMemo(() => ({ tenant: 'gotombola', partner: '', theme: '' }), []);
    const templateContextValue = useMemo(() => ({ mytype: () => <>HELLO</> }), []);
    const moduleLayoutsProviderValue = useMemo(() => moduleLayouts, [moduleLayouts]);
    const moduleAliasesProviderValue = useMemo(() => moduleAliases, [moduleAliases]);
    const moduleGroupsProviderValue = useMemo(() => moduleGroups, [moduleGroups]);
    const templatesContextValue = useMemo(() => ({}), []);

    return (
        <TemplateContextProvider value={templateContextValue}>
            <CustomizationContextProvider value={customizationContextValue}>
                <ModuleLayoutsContextProvider value={moduleLayoutsProviderValue}>
                    <ModuleAliasesContextProvider value={moduleAliasesProviderValue}>
                        <ModuleGroupsContextProvider value={moduleGroupsProviderValue}>
                            <TemplatesContextProvider value={templatesContextValue}>
                                <I18nProvider value={i18n}>{children}</I18nProvider>
                            </TemplatesContextProvider>
                        </ModuleGroupsContextProvider>
                    </ModuleAliasesContextProvider>
                </ModuleLayoutsContextProvider>
            </CustomizationContextProvider>
        </TemplateContextProvider>
    );
}

export function a(x: any = {}) {
    return {
        locale: args.locale,
        ...x,
    };
}

export function s(Component, args) {
    return function MyComponent(args2) {
        const props = { ...args, ...args2 };

        return (
            <Provider {...props}>
                <Component {...props} />
            </Provider>
        );
    };
}
