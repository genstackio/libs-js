import { useMemo } from 'react';
import getFirst from '../utils/getFirst';

export function useTypeModulesPageCustomizations(doc: any, page: string, metaMode: string) {
    const metaModePrefix = `${metaMode.slice(0, 1).toUpperCase()}${metaMode.slice(1)}`;
    return useMemo(
        () => ({
            modules: getFirst(doc, `page${metaModePrefix}Modules`, `public${metaModePrefix}Modules`),
            diff: getFirst(doc, `page${metaModePrefix}ModulesDiff`, `public${metaModePrefix}ModulesDiff`),
            custom: getFirst(doc, `page${metaModePrefix}ModulesCustom`, `public${metaModePrefix}ModulesCustom`),
            layout: getFirst(doc, `page${metaModePrefix}Layout`, `public${metaModePrefix}Layout`),
            params: getFirst(doc, `page${metaModePrefix}ModulesParams`, `public${metaModePrefix}ModulesParams`),
        }),
        [doc, page, metaModePrefix],
    );
}

export default useTypeModulesPageCustomizations;
