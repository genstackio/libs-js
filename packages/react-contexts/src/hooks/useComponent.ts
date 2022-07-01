import useImporter from "./useImporter";
import {useMemo} from "react";

const EmptyComponent = () => null;

export function useComponent(type: string|undefined, name: string|undefined, forcedComponent: any = undefined, test: boolean = true) {
    const importer = useImporter();
    return useMemo(
        () =>
            forcedComponent ||
            (test && importer ? importer(name || 'unknown', type || 'default') : undefined) || EmptyComponent,
        [name, importer, forcedComponent, importer, type, test],
    );
}

// noinspection JSUnusedGlobalSymbols
export default useComponent;
