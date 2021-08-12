import { args, s, a } from '../utils';
import { TabPanel } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/TabPanel',
    component: TabPanel,
    argTypes: a({
        children: args.textValue,
        value: args.value,
        index: args.value,
    }),
};

export const basic = s(TabPanel, {
    children: data.common.content,
    index: 8,
    value: 8,
});
