import {args, s} from "../utils";
import {Badge} from '../../src';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        color: args.color,
    },
}

const Template = args => (<Badge {...args} />);

export const basic = s(Template, {
    text: "je suis un tag",
});
export const custom = s(Template, {
    color: 'success',
    text: "pill tu perds",
    variant: 'contained',
    type: 'pill',
});