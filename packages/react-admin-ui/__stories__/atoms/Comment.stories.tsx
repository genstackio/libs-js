import { args, s, a } from '../utils';
import { Comment } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Comment',
    component: Comment,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        description: args.description,
    }),
};

const Template = (args) => <Comment {...args} />;

export const basic = s(Template, {
    title: data.user.name,
    description: data.common.content,
});

export const withSubtitle = s(Template, {
    title: data.user.name,
    subtitle: `(${data.user.title})`,
    description: data.common.content,
});
