import { args, s, a } from '../utils';
import { Progress } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Progress',
    component: Progress,
    argTypes: a({
        variant: args.progressVariant,
        value: args.value,
    }),
};

const Template = (args) => <Progress {...args} />;

export const basic = s(Template, {
    value: data.common.number_value,
});

export const circular = s(Template, {
    value: data.common.number_value,
    variant: 'circular',
});
