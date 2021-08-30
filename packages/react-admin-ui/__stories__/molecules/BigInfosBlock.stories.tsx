import { args, s, a } from '../utils';
import { BigInfosBlock } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/BigInfosBlock',
    component: BigInfosBlock,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(BigInfosBlock, {
    items: [
        { title: data.common.value, subtitle: data.common.subtitle },
        { title: data.common.number_value, subtitle: data.common.subtitle2 },
        { title: data.common.title, subtitle: data.common.subtitle3 },
    ],
    title: data.common.title2,
    subtitle: data.common.subtitle2,
    center: true,
});
