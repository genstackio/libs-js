import { WithChildren, WithClassName } from '../withs';

export function UnknownModuleGroup({ children }: UnknownModuleGroupProps) {
    return <>{children || ''}</>;
}

export interface UnknownModuleGroupProps extends WithChildren, WithClassName {}

// noinspection JSUnusedGlobalSymbols
export default UnknownModuleGroup;
