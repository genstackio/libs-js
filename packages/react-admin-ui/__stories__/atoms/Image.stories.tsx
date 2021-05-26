import {args, s} from "../utils";
import {Image} from '../../src';

export default {
    title: 'Atoms/Image',
    component: Image,
    argTypes: {
        url: args.text,
        alt: args.text,
    },
}

const Template = args => <Image {...args} />;

export const basic = s(Template, {
    url: 'https://image-placeholder.com/images/actual-size/240x320.png',
    alt: 'img'
})