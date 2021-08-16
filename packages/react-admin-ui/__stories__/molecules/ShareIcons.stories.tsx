import { args, s, a } from '../utils';
import { ShareIcons } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ShareIcons',
    component: ShareIcons,
    argTypes: a({
        items: args.items,
        color: args.color,
    }),
};

export const basic = s(ShareIcons, {
    items: [
        {
            type: 'facebook',
            target: data.item.target,
        },
        { type: 'googleplus', target: data.item.target },
        { type: 'twitter', target: data.item.target },
        { type: 'instagram', target: data.item.target },
        { type: 'rss', target: data.item.target },
        { type: 'something', target: data.item.target },
    ],
});
