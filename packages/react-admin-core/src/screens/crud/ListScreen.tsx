import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function ListScreen({singular, plural, list: {search, deletable, props = {}} = {}}: ListScreenProps) {
    const Component = useComponent('screen_template', 'list');

    return <Component name={plural} singularName={singular} search={search} deletable={deletable} {...props} />
}

export interface ListScreenProps {
    name: string;
    singular: string;
    plural: string;
    list?: {
        search?: boolean;
        deletable?: boolean;
        props?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default ListScreen
