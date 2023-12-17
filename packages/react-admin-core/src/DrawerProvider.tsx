import { DrawerContextProvider } from '@genstackio/react-contexts/lib/contexts/DrawerContext';
import useDrawerProviderValue from '@genstackio/react-contexts/lib/hooks/useDrawerProviderValue';
import AppDrawer, { AppDrawerProps } from './organisms/AppDrawer';

export function DrawerProvider({ children, dynamic = false, ...props }: DrawerProviderProps) {
    const value = useDrawerProviderValue();
    return (
        <DrawerContextProvider value={value}>
            <AppDrawer {...props} />
            {children ? (dynamic ? children(value) : children) : false}
        </DrawerContextProvider>
    );
}

export interface DrawerProviderProps extends AppDrawerProps {
    children?: any;
    dynamic?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default DrawerProvider;
