import { WithChildren, WithClassName } from '../withs';

export function FooterModuleGroup({ children }: FooterModuleGroupProps) {
    return <>{children || ''}</>;
}

export interface FooterModuleGroupProps extends WithChildren, WithClassName {}

// noinspection JSUnusedGlobalSymbols
export default FooterModuleGroup;
