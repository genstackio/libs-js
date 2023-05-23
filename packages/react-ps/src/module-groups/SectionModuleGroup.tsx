import { WithChildren, WithClassName } from '../withs';

export function SectionModuleGroup({ children }: SectionModuleGroupProps) {
    return <>{children || ''}</>;
}

export interface SectionModuleGroupProps extends WithChildren, WithClassName {}

// noinspection JSUnusedGlobalSymbols
export default SectionModuleGroup;
