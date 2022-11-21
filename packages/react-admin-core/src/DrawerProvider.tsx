import {DrawerContextProvider} from "@genstackio/react-contexts/lib/contexts/DrawerContext";
import useDrawerProviderValue from "@genstackio/react-contexts/lib/hooks/useDrawerProviderValue";
import AppDrawer from "./organisms/AppDrawer";

export function DrawerProvider({children}: DrawerProviderProps) {
    const value = useDrawerProviderValue();
    return (
        <DrawerContextProvider value={value}>
            <AppDrawer />
            {children || false}
        </DrawerContextProvider>
    )
}

export interface DrawerProviderProps {
    children?: any;
}

// noinspection JSUnusedGlobalSymbols
export default DrawerProvider;
