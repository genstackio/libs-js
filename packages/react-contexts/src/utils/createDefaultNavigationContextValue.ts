import { navigation_context_value } from '../types';

export const createDefaultNavigationContextValue = (
    defaultValue: navigation_context_value | undefined = undefined,
): navigation_context_value => {
    return (
        defaultValue || {
            InternalLink: () => null,
            ExternalLink: () => null,
        }
    );
};

export default createDefaultNavigationContextValue;
