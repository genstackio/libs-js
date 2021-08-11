import { args, s, a } from '../utils';
import { Comment } from '../../src';

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
    title: 'Jolio Mark',
    description:
        'There are many variations of passages of Lorem Ipsum available, but ' +
        "the majority have suffered alteration in some form, by injected humour, or randomised words which don't " +
        'look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there ' +
        "isn't anything embarrassing hidden in the middle of text.",
});

export const withSubtitle = s(Template, {
    title: 'Jolio Mark',
    subtitle: '(Designer)',
    description:
        'There are many variations of passages of Lorem Ipsum available, but ' +
        "the majority have suffered alteration in some form, by injected humour, or randomised words which don't " +
        'look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there ' +
        "isn't anything embarrassing hidden in the middle of text.",
});
