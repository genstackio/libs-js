import {DrawerContextProvider} from "@genstackio/react-contexts/lib/contexts/DrawerContext";
import useDrawerProviderValue from "@genstackio/react-contexts/lib/hooks/useDrawerProviderValue";
import AppDrawer from "./organisms/AppDrawer";

export function DrawerProvider({children, dynamic = false}: DrawerProviderProps) {
    const value = useDrawerProviderValue();
    return (
        <DrawerContextProvider value={value}>
            <AppDrawer />
            {children ? (dynamic ? children(value) : children) : false}
        </DrawerContextProvider>
    )
}

export interface DrawerProviderProps {
    children?: any;
    dynamic?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default DrawerProvider;
