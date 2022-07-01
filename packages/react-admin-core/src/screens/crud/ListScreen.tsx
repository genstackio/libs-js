import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function ListScreen({singular, plural}: ListScreenProps) {
    const Component = useComponent('screen_template', 'list');

    return <Component name={plural} singularName={singular} />
}

export interface ListScreenProps {
    name: string;
    singular: string;
    plural: string;
}

// noinspection JSUnusedGlobalSymbols
export default ListScreen
