import { WithChildren, WithClassName } from '../withs';

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

export interface TabPanelProps extends WithClassName, WithChildren {
    index: number;
    value: number;
}

export default TabPanel;
