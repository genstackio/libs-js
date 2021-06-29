import { args, s, a } from '../utils';
import { StatsChartHeader } from '../../src';

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
    subtitle: 'Je suis un sous-titre',
    value: 'Lorem Ipsum',
    stats: 42,
});
