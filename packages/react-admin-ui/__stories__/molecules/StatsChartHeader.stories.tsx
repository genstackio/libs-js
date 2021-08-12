import { args, s, a } from '../utils';
import { StatsChartHeader } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/StatsChartHeader',
    component: StatsChartHeader,
    argTypes: a({
        subtitle: args.subtitle,
        value: args.textValue,
        stats: args.value,
    }),
};

const Template = (args) => <StatsChartHeader {...args} />;

export const basic = s(Template, {
    subtitle: data.common.subtitle,
    value: data.common.value,
    stats: data.common.number_value,
});
