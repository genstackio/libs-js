import { useMemo } from 'react';
import { WithComponent, WithIndex, WithType } from '../withs';
import { ModuleContextProvider } from '../contexts/ModuleContext';
import ErrorBoundary from '@genstackio/react-error-boundary';

const defaultAliases = {};
const defaultExtraConfig = {};

export function ModuleInstance({
    blockProps,
    component,
    configs,
    aliases = defaultAliases,
    containerProps,
    extraConfig = defaultExtraConfig,
    index,
    paddingMode,
    total,
    type,
    ...props
}: ModuleInstanceProps) {
    const config = useMemo(
        () => ({
            ...((configs || {})[type] || (configs || {})[type] || (configs || {})[aliases[type] || ''] || {}),
            ...(extraConfig || {}),
        }),
        [configs, type, extraConfig],
    );
    const value = useMemo(
        () => ({
            type,
            index,
            total,
            first: index === 0,
            last: index === total - 1,
            middle: index > 0 && index < total - 1,
            containerProps,
            blockProps,
            paddingMode,
            config,
            props,
        }),
        [type, index, total, containerProps, blockProps, paddingMode, config, props],
    );

    const Comp = component(type) || (() => <>UNKNOWN MODULE {type}</>);

    return (
        <ErrorBoundary type={'module'} subtype={type}>
            <ModuleContextProvider value={value}>
                <Comp {...config} {...props} config={config} />
            </ModuleContextProvider>
        </ErrorBoundary>
    );
}

export interface ModuleInstanceProps
    extends Required<WithComponent<Function>>,
        Required<WithIndex>,
        Required<WithType> {
    aliases?: Record<string, string>;
    total: number;
    configs: any;
    extraConfig?: any;
    extraProps?: any;
    containerProps?: any;
    blockProps?: boolean;
    paddingMode?: 'left' | 'right' | 'all' | 'none';
}

export default ModuleInstance;
