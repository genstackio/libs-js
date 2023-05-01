import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';

const defaultComponentProps = {};

export function Content({ props: componentProps = defaultComponentProps, ...props }: ContentProps) {
    const Component = useComponent('content', props.type);

    return <Component {...props} {...componentProps} />;
}

export interface ContentProps {
    type?: string;
    content?: any[];
    options?: { [key: string]: any };
    props?: Record<string, any>;
}

export default Content;
