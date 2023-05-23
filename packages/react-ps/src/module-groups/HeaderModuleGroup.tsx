import { WithChildren, WithClassName } from '../withs';

export function HeaderModuleGroup({ children }: HeaderModuleGroupProps) {
    return <>{children || ''}</>;
}

export interface HeaderModuleGroupProps extends WithChildren, WithClassName {}

// noinspection JSUnusedGlobalSymbols
export default HeaderModuleGroup;
