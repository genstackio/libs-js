import { args, s } from '../utils';
import { ItemSummary } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ItemSummary',
    component: ItemSummary,
    argTypes: {
        date: args.date,
        author: args.author,
        likes: args.likes,
        comments: args.comments,
    },
};

export const basic = s(ItemSummary, {
    date: data.common.date,
    author: data.user.name,
    likes: data.common.likes,
    comments: data.common.comments,
});
