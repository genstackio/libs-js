import { useCallback, useMemo } from 'react';
import { module_definition } from '../types';
import { WithChildren, WithIndex, WithItems, WithType } from '../withs';
import ModuleInstance from './ModuleInstance';
import clsx from 'clsx';
import useDesignerContext from '../hooks/useDesignerContext';
import useModuleGroupsContext from '../hooks/useModuleGroupsContext';
import DebugPanel from '../molecules/DebugPanel';

const defaultModuleProps = {};

export function GroupInstance({
    children = undefined,
    items = [],
    moduleProps = defaultModuleProps,
    paddingMode = 'all',
    templateModules,
    type = 'unknown',
}: GroupInstanceProps) {
    const groups = useModuleGroupsContext();
    const Comp = useMemo(() => groups[type || ''] || groups['unknown'], [type]);

    const componentFn = useCallback((type) => templateModules[type] || templateModules.unknown, [templateModules]);

    const designerContext = useDesignerContext();
    const groupClassName = useMemo(
        () => (designerContext.debug ? 'relative hover:cursor-pointer hover:bg-orange-300' : undefined),
        [designerContext.debug],
    );

    return (
        <Comp className={clsx(groupClassName)}>
            {designerContext.debug && <DebugPanel kind={'groupInstance'} type={type} />}
            {items.map((m: module_definition, i: number) => (
                <ModuleInstance
                    key={i}
                    type={m.type}
                    index={i}
                    total={items.length}
                    component={componentFn}
                    extraConfig={m.config}
                    containerProps={m.containerProps}
                    blockProps={m.blockProps}
                    {...moduleProps}
                    paddingMode={paddingMode}
                />
            ))}
            {children || ''}
        </Comp>
    );
}

export interface GroupInstanceProps
    extends WithChildren,
        Required<WithIndex>,
        WithItems<module_definition>,
        Required<WithType> {
    total: number;
    templateModules: any;
    moduleProps?: any;
    paddingMode?: 'left' | 'right' | 'all' | 'none';
}

export default GroupInstance;
