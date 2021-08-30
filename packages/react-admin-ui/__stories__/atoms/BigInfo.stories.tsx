import { args, s, a } from '../utils';
import { BigInfo } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/BigInfo',
    component: BigInfo,
    argTypes: a({
        color: args.color,
        title: args.title,
        subtitle: args.subtitle,
    }),
};

export const basic = s(BigInfo, {
    title: data.common.title,
    subtitle: data.common.subtitle,
});
