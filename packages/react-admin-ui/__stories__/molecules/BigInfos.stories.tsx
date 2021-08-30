import { args, s, a } from '../utils';
import { BigInfos } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/BigInfos',
    component: BigInfos,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(BigInfos, {
    items: [
        { title: data.common.title, subtitle: data.common.subtitle },
        { title: data.common.title2, subtitle: data.common.subtitle2 },
        { title: data.common.title3, subtitle: data.common.subtitle3 },
    ],
});
