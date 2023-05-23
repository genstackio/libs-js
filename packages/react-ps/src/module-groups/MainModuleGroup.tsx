import { WithChildren, WithClassName } from '../withs';

export function MainModuleGroup({ children }: MainModuleGroupProps) {
    return <>{children || ''}</>;
}

export interface MainModuleGroupProps extends WithChildren, WithClassName {}

// noinspection JSUnusedGlobalSymbols
export default MainModuleGroup;
