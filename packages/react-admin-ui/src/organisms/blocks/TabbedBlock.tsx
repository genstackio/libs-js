import { useState, useCallback, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import bgClass from '../../utils/bgClass';
import Block, { BaseBlockProps } from '../../atoms/Block';
import TabPanel from '../../molecules/TabPanel';
import { WithItemsOfTabs } from '../../withs';

export function TabbedBlock({ items = [], tabProps = {}, ...props }: TabbedBlockProps) {
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event: ChangeEvent, newValue: number) => setValue(newValue), [setValue]);
    return (
        <Block padding={'none'} {...props}>
            <AppBar position={'static'} elevation={0} color={'transparent'}>
                <Tabs
                    variant={'scrollable'}
                    scrollButtons={'on'}
                    value={value}
                    onChange={handleChange as any}
                    aria-label={'simple tabs example'}
                    className={'bg-transparent border-b-1 border-disabled'}
                    TabIndicatorProps={{ className: bgClass({ color: props.color, variant: 'outlined' }) }}
                >
                    {items.map(({ title, disabled }, index) => (
                        <Tab
                            label={title}
                            key={index}
                            id={`simple-tab-${index}`}
                            aria-controls={`simple-tabpanel-${index}`}
                            disabled={disabled}
                            className={'focus:outline-none'}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {items.map(({ content = null, component: Component, props = {} }, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {Component ? <Component {...tabProps} {...props} /> : content}
                </TabPanel>
            ))}
        </Block>
    );
}

export interface TabbedBlockProps extends BaseBlockProps, WithItemsOfTabs {
    tabProps?: any;
}

// noinspection JSUnusedGlobalSymbols
export default TabbedBlock;
