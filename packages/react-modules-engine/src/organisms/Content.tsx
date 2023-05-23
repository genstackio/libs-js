import { useMemo } from 'react';
import useContent from '../hooks/useContent';
import ModuleInstance from './ModuleInstance';

const defaultContainerProps = {};

export function Content({ content, ...props }: ContentProps) {
    const Comp = useContent(content, props);

    const defaultContentConfigs = useMemo(() => ({ [content?.type]: {} }), [content?.type]);

    return (
        <ModuleInstance
            type={content?.type}
            configs={defaultContentConfigs}
            {...props}
            component={() => Comp}
            extraConfig={content?.config}
            containerProps={defaultContainerProps}
            blockProps={false}
            {...props}
            paddingMode={'none'}
        />
    );
}

export interface ContentProps {
    content?: any;
    index: number;
    total: number;
}

// noinspection JSUnusedGlobalSymbols
export default Content;
