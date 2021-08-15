import { useState, useCallback, ChangeEvent, useMemo } from 'react';
import Block, { BaseBlockProps } from '../../atoms/Block';
import TabPanel from '../../molecules/TabPanel';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import bgClass from '../../utils/bgClass';
import useBlock from '../../hooks/useBlock';
import { WithItemsOfTabs } from '../../withs';

export function TabbedBlock({ items = [], tabProps = {}, ...props }: TabbedBlockProps) {
    const [bProps] = useBlock(props, { p: 'none' });
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event: ChangeEvent, newValue: number) => setValue(newValue), [setValue]);
    const tabIndicatorProps = useMemo(
        () => ({ className: bgClass({ color: props.color, variant: 'outlined' }) }),
        [props.color],
    );
    return (
        <Block {...bProps}>
            <AppBar elevation={0} color={'transparent'} position={'static'}>
                <Tabs
                    aria-label={'simple tabs example'}
                    onChange={handleChange as any}
                    scrollButtons={'on'}
                    value={value}
                    variant={'scrollable'}
                    TabIndicatorProps={tabIndicatorProps}
                    className={'bg-transparent border-b-1 border-disabled'}
                >
                    {items.map(({ title, disabled }, index) => (
                        <Tab
                            aria-controls={`simple-tabpanel-${index}`}
                            disabled={disabled}
                            id={`simple-tab-${index}`}
                            key={index}
                            label={title}
                            className={'focus:outline-none'}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {items.map(({ content = null, component: Component, props = {} }, index) => (
                <TabPanel index={index} key={index} value={value}>
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
