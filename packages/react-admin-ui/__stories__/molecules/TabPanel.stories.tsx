import { args, s, a } from '../utils';
import { TabPanel } from '../../src';

export default {
    title: 'Molecules/TabPanel',
    component: TabPanel,
    argTypes: a({
        children: args.textValue,
        value: args.value,
        index: args.value,
    }),
};

const Template = (args) => <TabPanel {...args} />;

export const basic = s(Template, {
    children: 'Lorem Ipsum',
    index: 8,
    value: 8,
});
