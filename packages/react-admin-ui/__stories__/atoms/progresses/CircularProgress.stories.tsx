import { args, s, a } from '../../utils';
import { CircularProgress } from '../../../src';

export default {
    title: 'Atoms/progresses/CircularProgress',
    component: CircularProgress,
    argTypes: a({
        value: args.defaultValue,
    }),
};

export const basic = s(CircularProgress, {
    value: 42,
});
