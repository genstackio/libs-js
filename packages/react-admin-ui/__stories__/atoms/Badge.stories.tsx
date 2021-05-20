import {args, s} from "../utils";
import {Badge} from '../../src';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        text: args.text,
        variant: args.badgeVariant,
        color: args.color,
    },
}

const Template = args => (<Badge {...args} />);

export const basic = s(Template, {
    color:'success',
})