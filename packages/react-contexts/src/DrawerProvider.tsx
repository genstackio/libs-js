import {DrawerContextProvider} from "./contexts/DrawerContext";
import useDrawerProviderValue from "./hooks/useDrawerProviderValue";

export function DrawerProvider({children}: DrawerProviderProps) {
    const value = useDrawerProviderValue();
    return (
        <DrawerContextProvider value={value}>
            {children || false}
        </DrawerContextProvider>
    )
}

export interface DrawerProviderProps {
    children?: any;
}

// noinspection JSUnusedGlobalSymbols
export default DrawerProvider;
