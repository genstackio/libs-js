import clsx from 'clsx';
import { children, class_name } from '../types';

export function TabPanel({ className, children, value, index, ...props }: TabPanelProps) {
    return (
        <div
            role={'tabpanel'}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
            className={clsx(className)}
        >
            {value === index && <div className={'p-3 text-sm'}>{children}</div>}
        </div>
    );
}

export interface TabPanelProps {
    className?: class_name;
    children?: children;
    index: number;
    value: number;
}

export default TabPanel;
