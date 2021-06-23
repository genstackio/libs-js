import { children } from '../types';

export function TabPanel({ children, value, index, ...props }: TabPanelProps) {
    return (
        <div
            role={'tabpanel'}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
        >
            {value === index && <div className={'p-3 text-sm'}>{children}</div>}
        </div>
    );
}

export interface TabPanelProps {
    children?: children;
    index: number;
    value: number;
}

export default TabPanel;
