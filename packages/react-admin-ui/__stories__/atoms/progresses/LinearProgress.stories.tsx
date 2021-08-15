import { args, s, a } from '../../utils';
import { LinearProgress } from '../../../src';

export default {
    title: 'Atoms/progresses/LinearProgress',
    component: LinearProgress,
    argTypes: a({
        value: args.value,
    }),
};

export const basic = s(LinearProgress, {
    value: 42,
});
