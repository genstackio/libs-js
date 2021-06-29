import { args, s, a } from '../../utils';
import { LinearProgress } from '../../../src';

export default {
    title: 'Atoms/progresses/LinearProgress',
    component: LinearProgress,
    argTypes: a({
        value: args.defaultValue,
    }),
};

const Template = (args) => <LinearProgress {...args} />;

export const basic = s(Template, {
    value: 42,
});
