import {args, s} from "../utils";
import {Tag} from '../../src';

export default {
    title: 'Atoms/Tag',
    component: Tag,
    argTypes: {
        text: args.text,
        color: args.color,
    },
}

const Template = args => (<Tag {...args} />);
export const basic = s(Template, {text: "je suis un tag"})