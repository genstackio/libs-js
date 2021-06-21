import {args, s, a} from "../utils";
import {Icon} from '../../src';

export default {
    title: 'Atoms/Icon',
    component: Image,
    argTypes: a({
        url: args.text,
        alt: args.text,
    }),
}

const Template = args => <Icon {...args} />;

export const basic = s(Template, {
    icon: 'phone',
})
