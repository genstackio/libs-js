import { useMemo } from 'react';
import { PlatformContextProvider } from '../contexts/PlatformContext';
import {WithChildren} from "@genstackio/react-types/lib/withs";

export function Provider({ env, children }: ProviderProps) {
    const platformContextProvider = useMemo(() => ({ env: env || 'prod' }), [env]);

    return (
        <PlatformContextProvider value={platformContextProvider}>
            {children}
        </PlatformContextProvider>
    );
}

export interface ProviderProps extends WithChildren {
    config?: any;
    locale?: string;
    env?: string;
}

export default Provider;
