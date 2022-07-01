import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function Content(props: ContentProps) {
    const Component = useComponent('content', props.type);

    return <Component {...props} />;
}

export interface ContentProps {
    type?: string;
    content?: any[];
    options?: {[key: string]: any};
}

export default Content;
