import {useState, useCallback, ReactNode, ChangeEvent} from 'react';
import {BaseBlockProps, Block} from "../../atoms";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import colorClass from "../../utils/colorClass";

function TabPanel({children, value, index, ...props}: TabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...props}
        >
            {value === index && (
                <div className={'p-3 text-sm'}>{children}</div>
            )}
        </div>
    );
}

interface TabPanelProps {
    children?: ReactNode;
    index: any;
    value: any;
}

export function TabbedBlock({items = [], ...props}: TabbedBlockProps) {
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event: ChangeEvent<{}>, newValue: number) => setValue(newValue), [setValue]);
    return (
        <Block padding={'none'} {...props}>
            <AppBar position="static" elevation={0} color={'transparent'}>
                <Tabs variant={'scrollable'} scrollButtons={'on'} value={value} onChange={handleChange} aria-label="simple tabs example" className={'bg-transparent border-b-1 border-gray-200'} TabIndicatorProps={{className: colorClass({color: props.color, variant: 'outlined'})}}>
                    {items.map(({title, disabled}, index) => (
                        <Tab label={title} key={index} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} disabled={disabled} className={'focus:outline-none'} />
                    ))}
                </Tabs>
            </AppBar>
            {items.map(({content}, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {content}
                </TabPanel>
            ))}
        </Block>
    );
}

export interface TabbedBlockProps extends BaseBlockProps {
    items?: {title?: any, content?: any, disabled?: boolean}[],
}

export default TabbedBlock