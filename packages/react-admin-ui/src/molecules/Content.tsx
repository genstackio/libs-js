import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { expression_context_value } from '@genstackio/react-contexts/lib/types';
import useExpressionContext from '@genstackio/react-contexts/lib/hooks/useExpressionContext';

const defaultComponentProps = {};

function buildTestFn(condition: any, expressionContext: expression_context_value) {
    if (!condition) return async () => true;

    return async (data) => !!(await expressionContext.eval(condition, data));
}

export function Condition({ condition, children }) {
    const { watch, getValues } = useFormContext() || {};
    const [result, setResult] = useState<boolean>(false);
    const conditionContext = useExpressionContext();

    useEffect(() => {
        const testFn = buildTestFn(condition, conditionContext);
        const fn = (data: any) => {
            testFn(data).then((newResult) => {
                newResult !== result && setResult(newResult);
            });
        };
        const subscription = watch(fn);
        fn(getValues());
        return () => {
            subscription.unsubscribe();
        };
    }, [watch, getValues, setResult, result, condition]);

    if (!result) return null;

    return children?.();
}
export function Content({ props: componentProps = defaultComponentProps, if: condition, ...props }: ContentProps) {
    const Component = useComponent('content', props.type);

    const content = <Component {...props} {...componentProps} />;

    return condition ? <Condition condition={condition}>{() => content}</Condition> : content;
}

export interface ContentProps {
    type?: string;
    content?: any[];
    options?: { [key: string]: any };
    props?: Record<string, any>;
    if?: string;
}

export default Content;
