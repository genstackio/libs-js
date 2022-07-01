import useImporter from "@genstackio/react-contexts/lib/hooks/useImporter";

export function Content(props: ContentProps) {
    const importer = useImporter();

    const Component = (importer ? importer('content', props.type || 'default') : undefined) || (() => null);

    return <Component {...props} />;
}

export interface ContentProps {
    type?: string;
    content?: any[];
    options?: {[key: string]: any};
}

export default Content;