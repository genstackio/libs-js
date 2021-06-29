import { args, s, a } from '../../utils';
import { CircularProgress } from '../../../src';

export default {
    title: 'Atoms/progresses/CircularProgress',
    component: CircularProgress,
    argTypes: a({
        value: args.defaultValue,
    }),
};

const Template = (args) => <CircularProgress {...args} />;

export const basic = s(Template, {
    value: 42,
});
