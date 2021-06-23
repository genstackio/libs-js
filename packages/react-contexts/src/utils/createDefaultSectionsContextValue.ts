import { sections_context_value } from '../types';

export const createDefaultSectionsContextValue = (
    defaultValue: sections_context_value | undefined = undefined,
): sections_context_value =>
    defaultValue || { sections: [], section: undefined, allSections: [], detectedSections: [] };

export default createDefaultSectionsContextValue;
