import { useMemo } from 'react';
import { styling_context_value_short } from './types';
import { WithChildren } from './withs';
import { StylingContextProvider } from './contexts/StylingContext';
import buildStyling from './utils/buildStyling';

export function StylingProvider({ children, styling }: StylingProviderProps) {
    const value = useMemo(() => buildStyling(styling), [styling]);

    return <StylingContextProvider value={value}>{children || ''}</StylingContextProvider>;
}

export interface StylingProviderProps extends WithChildren {
    styling: styling_context_value_short;
}

// noinspection JSUnusedGlobalSymbols
export default StylingProvider;
