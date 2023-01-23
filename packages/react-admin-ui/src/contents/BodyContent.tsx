import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';

export function BodyContent({ options = {}, ...rest2 }: BodyContentProps) {
    const { type, ...rest1 } = options;
    const Component = useComponent('body', type);

    return <Component {...rest1} options={options} {...rest2} />;
}

export interface BodyContentProps {
    options?: {
        type?: string;
        [key: string]: any;
    };
}

export default BodyContent;
