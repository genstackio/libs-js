import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function AppScreen({children}: any) {
    const Component = useComponent('layout', 'main_app');
    return (
        <Component>
            {children}
        </Component>
    );
}

// noinspection JSUnusedGlobalSymbols
export default AppScreen
