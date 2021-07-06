import { ReactNode } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

export function IconsProvider({ children, value: { fa } = {} }: IconsProviderProps) {
    fa && fa.length && library.add(...fa);

    return <>{children || ''}</>;
}

export interface IconsProviderProps {
    value?: { fa?: any[] };
    children?: ReactNode;
}

export default IconsProvider;
