import {args, s} from "../utils";
import {Icon} from '../../src';

export default {
    title: 'Atoms/Icon',
    component: Image,
    argTypes: {
        url: args.text,
        alt: args.text,
    },
}

const Template = args => <Icon {...args} />;

export const basic = s(Template, {
    icon: 'https://image-placeholder.com/images/actual-size/240x320.png',
})