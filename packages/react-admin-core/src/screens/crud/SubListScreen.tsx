import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function SubListScreen({plural, singular, parentPlural, list: {search, props = {}} = {}}: SubListScreenProps) {
    const Component = useComponent('screen_template', 'sub_list');

    return <Component name={plural} singularName={singular} parentName={parentPlural} search={search} {...props} />
}

export interface SubListScreenProps {
    name: string;
    singular: string;
    plural: string;
    parentName: string;
    parentSingular: string;
    parentPlural: string;
    list?: {
        search?: boolean;
        props?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default SubListScreen
