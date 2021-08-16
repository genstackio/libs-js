import { args, s, a } from '../utils';
import { ShareIcon } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ShareIcon',
    component: ShareIcon,
    argTypes: a({
        target: args.target,
    }),
};

export const basic = s(ShareIcon, {
    type: 'default',
});

export const withTarget = s(ShareIcon, {
    type: 'facebook',
    target: data.item.target,
});
