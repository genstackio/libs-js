import Div from '../atoms/Div';
import { AsWrapper } from '../as';
import { WithIndex, WithValueAsNumber } from '../withs';

export function TabPanel({ children, className, index, value, ...props }: TabPanelProps) {
    return (
        <div
            aria-labelledby={`simple-tab-${index}`}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            role={'tabpanel'}
            {...props}
            className={className}
        >
            {value === index && (
                <Div p={'xmd'} className={'text-sm'}>
                    {children}
                </Div>
            )}
        </div>
    );
}

export interface TabPanelProps extends AsWrapper, Required<WithIndex>, Required<WithValueAsNumber> {}

// noinspection JSUnusedGlobalSymbols
export default TabPanel;
