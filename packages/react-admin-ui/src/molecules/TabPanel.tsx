import { WithIndex, WithValueAsNumber } from '../withs';
import { AsWrapper } from '../as';

export function TabPanel({ className, children, value, index, ...props }: TabPanelProps) {
    return (
        <div
            role={'tabpanel'}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
            className={className}
        >
            {value === index && <div className={'p-3 text-sm'}>{children}</div>}
        </div>
    );
}

export interface TabPanelProps extends AsWrapper, Required<WithIndex>, Required<WithValueAsNumber> {}

// noinspection JSUnusedGlobalSymbols
export default TabPanel;
