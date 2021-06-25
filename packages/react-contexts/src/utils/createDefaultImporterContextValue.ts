import {importer_context_params} from "../types";

function EmptyComponent() {
    return null;
}

export const createDefaultImporterContextValue = (defaultValue: importer_context_params | undefined = undefined) => defaultValue || ((key: string, name: string) => EmptyComponent);

export default createDefaultImporterContextValue;
