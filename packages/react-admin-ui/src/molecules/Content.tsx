import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';

const defaultComponentProps = {};

function buildTestFn(condition: any) {
    if (!condition) return () => true;

    return (data) => Number(data.text) > 10;
}

export function Condition({ condition, children }) {
    const { watch, getValues } = useFormContext() || {};
    const [result, setResult] = useState<boolean>(false);

    useEffect(() => {
        const testFn = buildTestFn(condition);
        const fn = (data: any) => {
            setResult(testFn(data));
        };
        const subscription = watch(fn);
        fn(getValues());
        return () => {
            subscription.unsubscribe();
        };
    }, [watch, getValues, setResult]);

    if (!result) return null;

    return children?.();
}
export function Content({ props: componentProps = defaultComponentProps, if: condition, ...props }: ContentProps) {
    const Component = useComponent('content', props.type);

    let content = <Component {...props} {...componentProps} />;

    if (condition) content = <Condition condition={condition}>{() => content}</Condition>;

    return content;
}

export interface ContentProps {
    type?: string;
    content?: any[];
    options?: { [key: string]: any };
    props?: Record<string, any>;
    if?: string;
}

export default Content;
