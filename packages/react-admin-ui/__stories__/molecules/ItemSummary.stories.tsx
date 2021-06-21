import {args, s, a} from "../utils";
import {ItemSummary} from '../../src';

export default {
    title: 'Molecules/ItemSummary',
    component: ItemSummary,
    argTypes:{
        date:args.date,
        author:args.author,
        likes: args.likes,
        comments:args.comments,
    }),
}

const Template = args => <ItemSummary {...args} />

export const basic = s(Template, {
    date : 232567444,
    author : 'Federica Buzzi',
    likes : 2,
    comments: 598,
});
